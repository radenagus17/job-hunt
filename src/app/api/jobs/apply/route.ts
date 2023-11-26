import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
  const data = await req.json();
  // console.log(data);
  const res = await prisma.applicant.create({
    data,
  });

  await prisma.job.update({
    where: {
      id: data.jobId,
    },
    data: {
      applicants: {
        increment: 1,
      },
    },
  });

  return NextResponse.json(res);
}
