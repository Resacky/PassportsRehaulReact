﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PassportsRehaulReact.Data;

#nullable disable

namespace PassportsRehaulReact.Migrations
{
    [DbContext(typeof(PassportDbContext))]
    [Migration("20230515193120_add_entrybackup2_table")]
    partial class add_entrybackup2_table
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("PassportsRehaulReact.Models.entrybackup2", b =>
                {
                    b.Property<int>("ENTRYID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ENTRYID"), 1L, 1);

                    b.Property<decimal?>("ARSCG")
                        .HasColumnType("money");

                    b.Property<double?>("ARSSD")
                        .HasColumnType("float");

                    b.Property<bool?>("AmendedPass")
                        .HasColumnType("bit");

                    b.Property<string>("AppFirst")
                        .HasColumnType("char");

                    b.Property<string>("AppLast")
                        .HasColumnType("char");

                    b.Property<string>("AppMiddle")
                        .HasColumnType("char");

                    b.Property<double?>("CheckSD")
                        .HasColumnType("float");

                    b.Property<DateTime?>("Created")
                        .HasColumnType("datetime");

                    b.Property<string>("CreatedBy")
                        .HasColumnType("nchar");

                    b.Property<DateTime?>("DOB")
                        .HasColumnType("datetime");

                    b.Property<DateTime?>("Departure")
                        .HasColumnType("datetime");

                    b.Property<string>("LBoxDescription")
                        .HasColumnType("char");

                    b.Property<bool?>("NoFeePass")
                        .HasColumnType("bit");

                    b.Property<decimal?>("PassPortFee")
                        .HasColumnType("money");

                    b.Property<decimal?>("PassPortFeeCG")
                        .HasColumnType("money");

                    b.Property<string>("Phone")
                        .HasColumnType("char");

                    b.Property<double?>("PhotosFee")
                        .HasColumnType("float");

                    b.Property<bool?>("RegularPass")
                        .HasColumnType("bit");

                    b.Property<string>("ZipCode")
                        .HasColumnType("nchar");

                    b.Property<string>("amended")
                        .HasColumnType("char(1)");

                    b.Property<double?>("cash")
                        .HasColumnType("float");

                    b.Property<string>("nofee")
                        .HasColumnType("char(1)");

                    b.Property<string>("regular")
                        .HasColumnType("char(1)");

                    b.Property<double?>("total")
                        .HasColumnType("float");

                    b.HasKey("ENTRYID");

                    b.ToTable("entrybackup2");
                });

            modelBuilder.Entity("PassportsRehaulReact.Models.PassPortARSCG", b =>
                {
                    b.Property<int>("PPARSIDCG")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PPARSIDCG"), 1L, 1);

                    b.Property<string>("ARSDescription")
                        .IsRequired()
                        .HasColumnType("nchar");

                    b.Property<decimal>("ARSFee")
                        .HasColumnType("money");

                    b.Property<int?>("Sort")
                        .HasColumnType("int");

                    b.HasKey("PPARSIDCG");

                    b.ToTable("PassPortARSCG");
                });

            modelBuilder.Entity("PassportsRehaulReact.Models.PassPortARSSD", b =>
                {
                    b.Property<int>("PPARSIDSD")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PPARSIDSD"), 1L, 1);

                    b.Property<string>("ARSDescription")
                        .IsRequired()
                        .HasColumnType("nchar");

                    b.Property<decimal>("ARSFee")
                        .HasColumnType("money");

                    b.Property<int?>("Sort")
                        .HasColumnType("int");

                    b.HasKey("PPARSIDSD");

                    b.ToTable("PassPortARSSD");
                });

            modelBuilder.Entity("PassportsRehaulReact.Models.PassPortLockBoxes", b =>
                {
                    b.Property<int>("LOCKBOXID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("LOCKBOXID"), 1L, 1);

                    b.Property<string>("LBoxDescription")
                        .IsRequired()
                        .HasColumnType("char");

                    b.HasKey("LOCKBOXID");

                    b.ToTable("PassPortLockBoxes");
                });

            modelBuilder.Entity("PassportsRehaulReact.Models.PassportNewFees", b =>
                {
                    b.Property<int?>("Sort")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("Sort"), 1L, 1);

                    b.Property<string>("FeeDescription")
                        .IsRequired()
                        .HasColumnType("varchar");

                    b.Property<int?>("PPFEEID")
                        .HasColumnType("int");

                    b.Property<decimal?>("adult")
                        .HasColumnType("money");

                    b.Property<decimal?>("minor")
                        .HasColumnType("money");

                    b.HasKey("Sort");

                    b.ToTable("PassportNewFees");
                });
#pragma warning restore 612, 618
        }
    }
}