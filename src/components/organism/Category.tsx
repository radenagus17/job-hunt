import React, { FC } from "react";
import TitleSection from "../atoms/TitleSection";
import CategoryItem from "./CategoryItem";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="Category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {[1, 2, 3, 4, 5].map((item: number) => (
          <CategoryItem key={item} items={item} totalItems={100} />
        ))}
      </div>
    </div>
  );
};

export default Category;
