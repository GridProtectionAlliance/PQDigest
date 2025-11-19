//******************************************************************************************************
//  Program.cs - Gbtc
//
//  Copyright � 2020, Grid Protection Alliance.  All Rights Reserved.
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

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Gemstone.Data;
using Gemstone.Web;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.UI;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;
using openXDA.APIAuthentication;
using PQDigest;
using PQDigest.Controllers;
using PQDigest.Models;
using Serilog;

var builder = WebApplication.CreateBuilder(args);
var Configuration = builder.Configuration;

Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(Configuration).CreateLogger();

try
{
    Log.Information("Starting web application");

    builder.Services.AddSerilog();

    builder.Services.Configure<SystemSettings>(Configuration.GetSection("systemSettings"));

    builder.Services.AddSingleton<IAPICredentialRetriever, XDAAPICredentialRetriever>();

    /*
    builder.Services.AddCors(options =>
    {
        options.AddPolicy(
            name: "AllowInfluxDB",
            builder =>
            {
                using (
                    AdoDataConnection connection = new AdoDataConnection(
                        Configuration["OpenXDA:ConnectionString"],
                        Configuration["OpenXDA:DataProviderString"]
                    )
                )
                {
                    string host =
                        connection.ExecuteScalar<string>(
                            "SELECT Value FROM Setting WHERE Name = 'HIDS.Host'"
                        ) ?? "http://localhost:8086";
                    builder.WithOrigins(host);
                }
            }
        );
    });
    */

    IMvcBuilder mvcBuilder = builder
        .Services.AddControllersWithViews(options =>
        {
            options.InputFormatters.Insert(0, new RawRequestBodyFormatter());
        })
        .AddNewtonsoftJson(options =>
        {
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
                .Json
                .ReferenceLoopHandling
                .Ignore;
            options.SerializerSettings.ContractResolver = new DefaultContractResolver();
        });

    builder
        .Services.AddMvc(options =>
        {
            var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
            options.Filters.Add(new AuthorizeFilter(policy));
        })
        .AddMicrosoftIdentityUI();

    var authBuilder = builder
        .Services.AddAuthentication(options =>
        {
            options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
        })
        .AddOpenIdConnect(options =>
        {
            options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;

            Configuration.Bind("Oidc", options);
        });

    /*
    static void AddUserGraphInfo(ClaimsPrincipal claimsPrincipal, string json)
    {
        var identity = claimsPrincipal.Identity as ClaimsIdentity;
        var graph = JObject.Parse(json);
        string name =
            graph.Properties().Select(p => p.Name).FirstOrDefault(n => n.ToLower().Contains("tvaorgid"))
            ?? "";
        identity.AddClaim(
            new Claim(
                "org_id",
                Regex.Replace(graph[name]?.Value<string>() ?? "d9999", "[A-Za-z]", "0000")
            )
        );
    }

    authBuilder
            .AddMicrosoftIdentityWebApp(options =>
            {
                Configuration.Bind("AzureAd", options);
                // do something
                options.Events.OnTokenValidated = async context =>
                {
                    var tokenAcquisition =
                        context.HttpContext.RequestServices.GetRequiredService<ITokenAcquisition>();

                    HttpClient client = new HttpClient();
                    var token = await tokenAcquisition.GetAccessTokenForUserAsync(
                        Configuration.GetSection("GraphAPI")["Scopes"].Split(","),
                        user: context.Principal
                    );
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(
                        "Bearer",
                        token
                    );

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
                    string json = await client.GetStringAsync(
                        Configuration.GetSection("GraphAPI")["BaseUrl"] + "/me"
                    );
                    AddUserGraphInfo(context.Principal, json);
                };
            })
            .EnableTokenAcquisitionToCallDownstreamApi(
                options =>
                {
                    Configuration.Bind("AzureAd", options);
                },
                Configuration.GetSection("GraphAPI")["Scopes"].Split(",")
            )
            .AddInMemoryTokenCaches();
    }*/



    var app = builder.Build();

    if (builder.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
    }

    app.UseForwardedHeaders(
        new ForwardedHeadersOptions()
        {
            ForwardedHeaders = ForwardedHeaders.XForwardedProto | ForwardedHeaders.XForwardedHost,
        }
    );

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
            defaults: new { controller = "Home", action = "Index" }
        );

        endpoints.MapControllers();
    });

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}
