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

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Gemstone.Web;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Newtonsoft.Json.Serialization;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Graph;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using System.Net.Http.Headers;
using System.Security.Claims;
using Newtonsoft.Json;

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
                       var tokenAcquisition = context.HttpContext.RequestServices
                           .GetRequiredService<ITokenAcquisition>();

                       var authProvider = new DelegateAuthenticationProvider(async (request) =>
                       {
                           var token = await tokenAcquisition
                               .GetAccessTokenForUserAsync(new string[] { Configuration.GetSection("GraphAPI")["Scopes"] }, user: context.Principal);
                           request.Headers.Authorization =
                               new AuthenticationHeaderValue("Bearer", token);
                       });

                       var graphClient = new GraphServiceClient(authProvider);

                       var user = await graphClient.Me.Request().GetAsync();
                       AddUserGraphInfo(context.Principal, user);
                   };
               })
              .EnableTokenAcquisitionToCallDownstreamApi(options =>
                {
                      Configuration.Bind("AzureAd", options);
                }
             )
            .AddInMemoryTokenCaches();

            services.AddMvc(options =>
            {
                var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
                options.Filters.Add(new AuthorizeFilter(policy));
            });
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

            
            app.UseStaticFiles(WebExtensions.StaticFileEmbeddedResources());
            app.UseStaticFiles();

            app.UseRouting();


            app.UseAuthentication();
            app.UseAuthorization();

            app.Use((context, next) =>
            {
                if (context.User.Identity.IsAuthenticated)
                {
                    //var token = context.GetTokenAsync("access_token");
                    //var tokenAcquisition = context.RequestServices.GetService<IAuthenticationProvider>();
                    //string[] scopes = new string[] { "user.read" };
                    //string accessToken = tokenAcquisition.GetAccessTokenForUserAsync(scopes, user: context.User).Result;
                }
                return next.Invoke();
            });

            app.UseEndpoints(endpoints =>
            {
                //endpoints.MapRazorPages();

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

        public static void AddUserGraphInfo(ClaimsPrincipal claimsPrincipal, User user)
        {
            var identity = claimsPrincipal.Identity as ClaimsIdentity;

            identity.AddClaim(new Claim("graph", JsonConvert.SerializeObject(user)));
            //identity.AddClaim(
            //    new Claim("graph_email", user.Mail ?? user.UserPrincipalName));
            //identity.AddClaim(
            //    new Claim("graph_TimeZone", user.MailboxSettings.TimeZone));
            //identity.AddClaim(
                //new Claim("graph_TimeFormat", user.MailboxSettings.TimeFormat));
        }
    }
}
