import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobTypes } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface JobItemsProps extends JobTypes {}

const JobItems: FC<JobItemsProps> = ({
  categories,
  jobType,
  name,
  location,
  image,
  type,
}) => {
  return (
    <div className="border border-border p-8 flex flex-row items-center gap-6 cursor-pointer">
      <div>
        <Image src={image} alt={image} width={64} height={64} />
      </div>
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-muted-foreground text-sm mb-2">
          {type} . {location}
        </div>
        <div className="h-5 inline-flex gap-2 items-center">
          <Badge variant={"secondary"} className="min-w-[4.7rem]">
            {jobType}
          </Badge>
          <Separator orientation="vertical" />
          {categories.map((item: string, i: number) => (
            <Badge
              key={i}
              className="rounded border-primary bg-primary/5 text-primary"
              variant={"outline"}
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobItems;
