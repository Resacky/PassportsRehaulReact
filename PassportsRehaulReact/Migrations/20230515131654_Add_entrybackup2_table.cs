using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    public partial class Add_entrybackup2_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employees");

            migrationBuilder.DropTable(
                name: "PassPortFees");

            migrationBuilder.CreateTable(
                name: "PassportNewFees",
                columns: table => new
                {
                    Sort = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PPFEEID = table.Column<int>(type: "int", nullable: true),
                    FeeDescription = table.Column<string>(type: "varchar", nullable: false),
                    minor = table.Column<decimal>(type: "money", nullable: true),
                    adult = table.Column<decimal>(type: "money", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassportNewFees", x => x.Sort);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PassportNewFees");

            migrationBuilder.CreateTable(
                name: "employees",
                columns: table => new
                {
                    idnum = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cityCell = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cityphone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    radio = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employees", x => x.idnum);
                });

            migrationBuilder.CreateTable(
                name: "PassPortFees",
                columns: table => new
                {
                    PPFEEID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FeeAmtCG = table.Column<decimal>(type: "money", nullable: true),
                    FeeAmtSD = table.Column<decimal>(type: "money", nullable: true),
                    FeeDescription = table.Column<string>(type: "varchar", nullable: false),
                    Sort = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassPortFees", x => x.PPFEEID);
                });
        }
    }
}
