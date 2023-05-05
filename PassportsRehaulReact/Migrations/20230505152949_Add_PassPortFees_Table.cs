using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    public partial class Add_PassPortFees_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PassPortARSSD",
                columns: table => new
                {
                    PPARSIDSD = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Sort = table.Column<int>(type: "int", nullable: true),
                    ARSDescription = table.Column<string>(type: "nchar", nullable: false),
                    ARSFee = table.Column<decimal>(type: "money", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassPortARSSD", x => x.PPARSIDSD);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PassPortARSSD");
        }
    }
}
