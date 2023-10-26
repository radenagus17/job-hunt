"use client";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobTypes, filterformType } from "@/types";
import { CATEGORIES_OPTION } from "@/constants";

const FILTER_FORMS: filterformType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTION,
  },
];

const Dummy_Data: JobTypes[] = [
  {
    applicants: 5,
    categories: ["Marketing", "Design"],
    desc: "lorem",
    image: "/images/company2.png",
    jobType: "Full-Time",
    location: "Paris, France",
    name: "Social Media Assistant",
    needs: 10,
    type: "Agency",
  },
];

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmit}
        filterForm={FILTER_FORMS}
        loading={false}
        title="dream job"
        subtitle="Find your next career at companies Like HubSpot, Nike, DropBox"
        type="job"
        data={Dummy_Data}
      />
    </>
  );
}
