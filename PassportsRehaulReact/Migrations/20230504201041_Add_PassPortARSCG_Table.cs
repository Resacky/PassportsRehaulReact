using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    public partial class Add_PassPortARSCG_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PassPortARSCGs",
                columns: table => new
                {
                    PPARSIDCG = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    sort = table.Column<int>(type: "int", nullable: false),
                    ARSDescription = table.Column<string>(type: "nchar", nullable: false),
                    ARSFee = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassPortARSCGs", x => x.PPARSIDCG);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PassPortARSCGs");
        }
    }
}
