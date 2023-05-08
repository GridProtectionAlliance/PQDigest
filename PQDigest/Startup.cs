//******************************************************************************************************
//  Startup.cs - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  06/09/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text.RegularExpressions;
using Gemstone.Data;
using Gemstone.Web;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.UI;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;

namespace PQDigest
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            Env = env;
        }

        public IWebHostEnvironment Env { get; set; }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => {
                options.AddPolicy(name: "AllowInfluxDB", builder => {
                    using (AdoDataConnection connection = new AdoDataConnection(Configuration["OpenXDA:ConnectionString"], Configuration["OpenXDA:DataProviderString"]))
                    {
                        string host = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.Host'") ?? "http://localhost:8086";
                        builder.WithOrigins(host);
                    }
                });
            });

            IMvcBuilder builder = services.AddControllersWithViews( options => {
                options.InputFormatters.Insert(0, new RawRequestBodyFormatter());
            })
             
            .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                }
            );

            //services.AddMicrosoftIdentityWebAppAuthentication(Configuration, "AzureAd")
            //    .EnableTokenAcquisitionToCallDownstreamApi(initialScopes: new string[] { "user.read" })
            //    //.AddMicrosoftGraph(Configuration.GetSection("GraphApi"))
            //    .AddInMemoryTokenCaches();
            services.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
               .AddMicrosoftIdentityWebApp(options =>
               {
                   Configuration.Bind("AzureAd", options);
                   // do something
                   options.Events.OnTokenValidated = async context =>
                   {
                       var tokenAcquisition = context.HttpContext.RequestServices.GetRequiredService<ITokenAcquisition>();

                       HttpClient client = new HttpClient();
                       var token = await tokenAcquisition.GetAccessTokenForUserAsync(Configuration.GetSection("GraphAPI")["Scopes"].Split(","), user: context.Principal);
                       client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

                       //var authProvider = new DelegateAuthenticationProvider(async (request) =>
                       //{
                       //    var token = await tokenAcquisition
                       //        .GetAccessTokenForUserAsync(Configuration.GetSection("GraphAPI")["Scopes"].Split(",") , user: context.Principal);
                       //    request.Headers.Authorization =
                       //        new AuthenticationHeaderValue("Bearer", token);
                       //    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                       //});

                       //var graphClient = new GraphServiceClient(authProvider);

                       //var user = await graphClient.Me.Request().GetAsync();
                       //var extensions = await graphClient.Me.Extensions.Request().GetAsync();
                       string json = await client.GetStringAsync(Configuration.GetSection("GraphAPI")["BaseUrl"] + "/me");
                       AddUserGraphInfo(context.Principal, json);
                   };
               })
              .EnableTokenAcquisitionToCallDownstreamApi(options =>
                {
                    Configuration.Bind("AzureAd", options);
                }, Configuration.GetSection("GraphAPI")["Scopes"].Split(",")
             )
            .AddInMemoryTokenCaches();

            services.AddMvc(options =>
            {
                var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
                options.Filters.Add(new AuthorizeFilter(policy));
            }).AddMicrosoftIdentityUI();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseForwardedHeaders(new ForwardedHeadersOptions()
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedProto | ForwardedHeaders.XForwardedHost
            });

            app.UseStaticFiles(WebExtensions.StaticFileEmbeddedResources());
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                name: "default",
                pattern: "{newaction?}/{id?}",
                defaults: new {
                    controller = "Home",
                    action = "Index"
                } );

                endpoints.MapControllers();
            });
        }

        public static void AddUserGraphInfo(ClaimsPrincipal claimsPrincipal, string json)
        {
            var identity = claimsPrincipal.Identity as ClaimsIdentity;
            var graph = JObject.Parse(json);
            identity.AddClaim(new Claim("graph_json", json));
            string name = graph.Properties().Select(p => p.Name).FirstOrDefault(n => n.ToLower().Contains("tvaorgid")) ?? "";
            identity.AddClaim(new Claim("org_id", Regex.Replace(graph[name]?.Value<string>() ?? "d9999", "[A-Za-z]", "0000")));
        }
    }
}
