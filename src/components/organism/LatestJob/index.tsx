"use client";

import React, { FC } from "react";
import TitleSection from "../../atoms/TitleSection";
import JobItems from "./JobItems";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobTypes } from "@/types";

interface LatestJobProps {}

const LatestJob: FC<LatestJobProps> = ({}) => {
  const { jobs, isLoading, error } = useFeaturedJobs();

  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {jobs.map((item: JobTypes) => (
          <JobItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
