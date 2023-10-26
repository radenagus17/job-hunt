import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineFire } from "react-icons/ai";

type PropsPage = {
  readonly id: string | number;
};

interface CompanyPageProps {
  params: PropsPage;
}

export default function CompanyPage({ params }: CompanyPageProps) {
  // const { id } = params;
  // console.log(id);
  return (
    <>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
        <div className="inline-flex gap-3 text-sm text-muted-foreground">
          <Link className="hover:underline hover:text-black" href={"/"}>
            Home
          </Link>{" "}
          /
          <Link
            className="hover:underline hover:text-black"
            href={"/find-companies"}
          >
            Companies
          </Link>{" "}
          /
          <Link
            className="hover:underline hover:text-black"
            href={"/detail/company/1"}
          >
            Twitter
          </Link>
        </div>

        <div>
          <div className="mt-10 inline-flex gap-6 items-start">
            <Image
              src={"/images/company2.png"}
              alt="/images/company2.png"
              width={150}
              height={150}
            />
            <div>
              <div className="inline-flex gap-4 items-center">
                <span className="text-4xl font-semibold">Twitter</span>
                <Badge variant={"outline"}>10 Jobs</Badge>
              </div>
              <div className="mt-2">
                <Link
                  href={"/"}
                  className="text-primary text-sm hover:underline"
                >
                  https://twitter.com
                </Link>
              </div>
              <div className="mt-6 inline-flex items-center gap-10">
                {[0, 1, 2, 3].map((item: number) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-3 ring-1 p-3 rounded-md"
                  >
                    <div>
                      <div className="bg-white p-3 rounded-full">
                        <AiOutlineFire className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Founded</div>
                      <div className="font-semibold">March, 06 2023</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
