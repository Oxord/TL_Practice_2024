using Domain.Repositories;
using Infastructure;
using Infastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace WebApi;

public class Program
{
    public static void Main( string[] args )
    {
        var builder = WebApplication.CreateBuilder( args );

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        ConfigurationManager configuration = builder.Configuration;
        builder.Services.AddDbContext<TheatreDbContext>( options => options.UseSqlServer( configuration.GetConnectionString( "Connstr" ) ) );
        builder.Services.AddScoped<ITheaterRepository, TheatreRepository>();
        builder.Services.AddScoped<ICompositionRepository, CompositionRepository>();
        builder.Services.AddScoped<IAuthorRepository, AuthorRepository>();
        builder.Services.AddScoped<IPlayRepository, PlayRepository>();

        builder.Services.AddControllersWithViews().AddNewtonsoftJson( options =>
        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
        );

        var app = builder.Build();

        if ( app.Environment.IsDevelopment() )
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
