import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { filterformType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryJobFilter = () => {
  const { data, error, isLoading } = useSWR("/api/jobs/categories", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error),
    [data, isLoading, error]
  );

  const filters = useMemo(() => {
    return [
      {
        name: "categories",
        label: "Categories",
        items: categories,
      },
    ] as filterformType[];
  }, [categories]);

  // console.log(categories);

  return [filters];
};

export default useCategoryJobFilter;
