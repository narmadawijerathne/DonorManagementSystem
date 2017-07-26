using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DonorManagementSystem.Startup))]
namespace DonorManagementSystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
