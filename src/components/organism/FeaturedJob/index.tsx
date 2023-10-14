import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobProps {}

const FeaturedJob: FC<FeaturedJobProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="Jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2, 3].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maxime alias totam omnis similique molestias laborum nam quisquam quia neque?"
            categories={["marketing", "design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
