"use client";

import React, { FC, useMemo } from "react";
import TitleSection from "../atoms/TitleSection";
import CategoryItem from "./CategoryItem";
import useSWR from "swr";
import { fetcher, parsingCategories } from "@/lib/utils";
import { CategoryJobType } from "@/types";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const { data, isLoading, error } = useSWR("/api/jobs/categories", fetcher);

  const categories = useMemo(
    () => parsingCategories(data, isLoading, error),
    [data, isLoading, error]
  );

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="Category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories.map((item: CategoryJobType) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
