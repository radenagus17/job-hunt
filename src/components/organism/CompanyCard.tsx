import Image from "next/image";
import React, { FC } from "react";
import { Badge } from "../ui/badge";
import { CompanyType } from "@/types";
import { useRouter } from "next/navigation";

interface CompanyCardProps extends CompanyType {
  data: string;
}

const CompanyCard: FC<CompanyCardProps> = ({
  categories,
  description,
  image,
  name,
  totalJobs,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/companies/1")}
      className="border border-border p-6 cursor-pointer"
    >
      <div className="flex flex-row justify-between items-start">
        <Image src={image} alt={image} width={66} height={66} />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        {categories.map((item, idx) => (
          <Badge key={idx} variant={"outline"}>
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
