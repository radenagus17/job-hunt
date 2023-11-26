import { Prisma } from "@prisma/client";
import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const filterCategory =
    searchParams.get("category") !== ""
      ? searchParams.get("category")?.split(",")
      : [];

  const categoryQuery: Prisma.CompanyWhereInput =
    filterCategory && filterCategory.length > 0
      ? {
          CompanyOverview: {
            every: {
              industry: {
                in: filterCategory,
              },
            },
          },
        }
      : {};

  const companies = await prisma.company.findMany({
    where: { ...categoryQuery },
    include: {
      CompanyOverview: true,
      CompanyTeam: true,
      CompanySocialMedia: true,
      _count: {
        select: { Job: true },
      },
    },
  });

  return NextResponse.json(companies);
}
