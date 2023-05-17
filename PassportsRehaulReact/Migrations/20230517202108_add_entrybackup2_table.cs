using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    public partial class add_entrybackup2_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ARSCG",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "AmendedPass",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "Departure",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "NoFeePass",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "PassPortFeeCG",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "PhotosFee",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "RegularPass",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "ZipCode",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "amended",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "cash",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "nofee",
                table: "entrybackup2");

            migrationBuilder.DropColumn(
                name: "regular",
                table: "entrybackup2");

            migrationBuilder.AlterColumn<decimal>(
                name: "total",
                table: "entrybackup2",
                type: "decimal",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "ARSSD",
                table: "entrybackup2",
                type: "decimal",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "total",
                table: "entrybackup2",
                type: "float",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "ARSSD",
                table: "entrybackup2",
                type: "float",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal",
                oldNullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "ARSCG",
                table: "entrybackup2",
                type: "money",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "AmendedPass",
                table: "entrybackup2",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Departure",
                table: "entrybackup2",
                type: "datetime",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "NoFeePass",
                table: "entrybackup2",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "PassPortFeeCG",
                table: "entrybackup2",
                type: "money",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "PhotosFee",
                table: "entrybackup2",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "RegularPass",
                table: "entrybackup2",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ZipCode",
                table: "entrybackup2",
                type: "nchar",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "amended",
                table: "entrybackup2",
                type: "char(1)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "cash",
                table: "entrybackup2",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nofee",
                table: "entrybackup2",
                type: "char(1)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "regular",
                table: "entrybackup2",
                type: "char(1)",
                nullable: true);
        }
    }
}
