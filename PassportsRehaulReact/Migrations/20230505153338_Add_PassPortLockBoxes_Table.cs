using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    public partial class Add_PassPortLockBoxes_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PassPortFees",
                columns: table => new
                {
                    PPFEEID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Sort = table.Column<int>(type: "int", nullable: true),
                    FeeDescription = table.Column<string>(type: "varchar", nullable: false),
                    FeeAmtSD = table.Column<decimal>(type: "money", nullable: true),
                    FeeAmtCG = table.Column<decimal>(type: "money", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassPortFees", x => x.PPFEEID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PassPortFees");
        }
    }
}
