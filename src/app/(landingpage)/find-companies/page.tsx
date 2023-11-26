"use client";

import { CATEGORIES_OPTION } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import useCategoryCompanyFilter from "@/hooks/useCategoryCompanyFilter";
import useCompanies from "@/hooks/useCompanies";
import { formFilterCompanySchema } from "@/lib/form.schema";
import { CompanyType, filterformType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function FindCompaniesPage() {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const [filters] = useCategoryCompanyFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const { companies, isLoading, mutate } = useCompanies(categories);

  const onSubmit = async (val: z.infer<typeof formFilterCompanySchema>) => {
    setCategories(val.industry);
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
        title="dream companies"
        subtitle="Find the dreams companies you dream work for"
        loading={isLoading}
        type="company"
        data={companies}
      />
    </>
  );
}
