using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Negotiate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using PassportsRehaulReact.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

/* this is apparently important to connect to the SQL database */
builder.Services.AddDbContext<PassportDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DatabaseConnection")));

builder.Services.AddControllersWithViews();

/* Adding Authentication */
builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme)
    .AddNegotiate();

/* Adding Authorization */
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("BasePermissions", policy =>
        policy.RequireRole("coralgables.local\\PassportWrite"));
    options.AddPolicy("DeletePermissions", policy =>
        policy.RequireRole("coralgables.local\\PassportDelete"));
});

/* adding CORS */
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseAuthentication(); // Ensure you have this line to use authentication.

/* activating CORS */
app.UseCors(builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
});

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();  // And this line to use authorization.

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();