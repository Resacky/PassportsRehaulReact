using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    public partial class Add_PassPortFees_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PassPortFeess",
                columns: table => new
                {
                    PPFEEID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    sort = table.Column<int>(type: "int", nullable: false),
                    FeeDescription = table.Column<string>(type: "varchar(50)", nullable: false),
                    FeeAmtSD = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FeeAmtCG = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassPortFeess", x => x.PPFEEID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PassPortFeess");
        }
    }
}
