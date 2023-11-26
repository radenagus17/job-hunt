"use client";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCategoryJobFilter from "@/hooks/useCategoriesJobFilter";
import useJobs from "@/hooks/useJobs";
import { useEffect, useState } from "react";

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const [filters] = useCategoryJobFilter();
  const [categories, setCategories] = useState<string[]>([]);
  const { jobs, isLoading, mutate } = useJobs(categories);

  const onSubmit = async (val: z.infer<typeof formFilterSchema>) => {
    setCategories(val.categories);
  };

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmit}
        filterForm={filters}
        loading={isLoading}
        title="dream job"
        subtitle="Find your next career at companies Like HubSpot, Nike, DropBox"
        type="job"
        data={jobs}
      />
    </>
  );
}
