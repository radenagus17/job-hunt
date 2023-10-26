import CompanyCard from "@/components/organism/CompanyCard";
import FormFilterDynamic from "@/components/organism/FormFilterDynamic";
import FormSearchDynamic from "@/components/organism/FormSearchDynamic";
import JobCard from "@/components/organism/JobCard";
import { filterformType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface ExploreDataContainerProps {
  formFilter?: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForm: filterformType[];
  loading: boolean;
  title: string;
  subtitle: string;
  type: "job" | "company";
  data: any[];
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  formFilter,
  filterForm,
  onSubmitFilter,
  loading,
  title,
  subtitle,
  type,
  data,
}) => {
  return (
    <>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mb-11 flex justify-center gap-2">
            <span className="text-5xl font-semibold">Find your</span>
            <div className="relative">
              <span className="text-5xl font-semibold text-primary">
                {title}
              </span>
              <div className="absolute top-10 w-[220px] h-10">
                <Image
                  src={"/images/pattern2.png"}
                  alt="/images/pattern2.png"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">{subtitle}</div>
        </div>
        <FormSearchDynamic />
      </div>
      <div className="mt-20 mb-16 px-32 flex flex-row items-start gap-10">
        <div className="w-1/5">
          <FormFilterDynamic
            formFilter={formFilter}
            onSubmitFilter={onSubmitFilter}
            filterForms={filterForm}
          />
        </div>
        <div className="w-4/5">
          <div className="mb-8">
            <div className="text-3xl font-semibold">
              All {type === "job" ? "Jobs" : "Companies"}
            </div>
            <div className="text-muted-foreground">
              Showing {data.length} result
            </div>
          </div>
          <div>
            {loading ? (
              <span>loading...</span>
            ) : (
              <>
                {type === "job" ? (
                  <div className="grid grid-cols-1 gap-7">
                    {data.map((item: any, i: number) => (
                      <JobCard key={i} {...item} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-5">
                    {data.map((item: any, i: number) => (
                      <CompanyCard key={i} {...item} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
