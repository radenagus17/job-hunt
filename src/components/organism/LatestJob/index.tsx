import React, { FC } from "react";
import TitleSection from "../../atoms/TitleSection";
import JobItems from "./JobItems";

interface LatestJobProps {}

const LatestJob: FC<LatestJobProps> = ({}) => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {[0, 1, 2].map((item: number) => (
          <JobItems
            key={item}
            image="/images/company2.png"
            name="Social Media Assistant"
            type="Agency"
            location="Paris, France"
            jobType="Full Time"
            categories={["Marketing", "Design"]}
            desc="description"
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
