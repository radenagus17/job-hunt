import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { filterformType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryCompanyFilter = () => {
  const { data, error, isLoading } = useSWR("/api/company/categories", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error, true),
    [data, isLoading, error]
  );

  console.log(categories);

  const filters = useMemo(() => {
    return [
      {
        name: "industry",
        label: "Industry",
        items: categories,
      },
    ] as filterformType[];
  }, [categories]);

  // console.log(categories);

  return [filters];
};

export default useCategoryCompanyFilter;
