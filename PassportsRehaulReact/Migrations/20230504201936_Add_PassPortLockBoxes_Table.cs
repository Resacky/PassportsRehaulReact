using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    public partial class Add_PassPortLockBoxes_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PassPortLockBoxess",
                columns: table => new
                {
                    LOCKBOXID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LBoxDescription = table.Column<string>(type: "char(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassPortLockBoxess", x => x.LOCKBOXID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PassPortLockBoxess");
        }
    }
}
