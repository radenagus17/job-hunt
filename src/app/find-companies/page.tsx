"use client";

import { CATEGORIES_OPTION } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form.schema";
import { CompanyType, filterformType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FILTER_FORM: filterformType[] = [
  {
    name: "industries",
    label: "Industries",
    items: CATEGORIES_OPTION,
  },
];

const DUMMY_DATA: CompanyType[] = [
  {
    categories: ["Marketing", "Design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem debitis commodi perspiciatis ex sed reprehenderit ab veniam repudiandae architecto.",
    image: "/images/company2.png",
    totalJobs: 10,
    name: "Twitter",
  },
  {
    categories: ["Marketing", "Design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem debitis commodi perspiciatis ex sed reprehenderit ab veniam repudiandae architecto.",
    image: "/images/company2.png",
    totalJobs: 10,
    name: "Twitter",
  },
  {
    categories: ["Marketing", "Design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem debitis commodi perspiciatis ex sed reprehenderit ab veniam repudiandae architecto.",
    image: "/images/company2.png",
    totalJobs: 10,
    name: "Twitter",
  },
];

export default function FindCompaniesPage() {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industries: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
    console.log(val);
  };

  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmit}
        filterForm={FILTER_FORM}
        title="dream companies"
        subtitle="Find the dreams companies you dream work for"
        loading={false}
        type="company"
        data={DUMMY_DATA}
      />
    </>
  );
}
