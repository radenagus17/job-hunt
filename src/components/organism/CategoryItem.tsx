import React, { FC } from "react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CategoryItemProps {
  items: number;
  totalItems: number;
}

const CategoryItem: FC<CategoryItemProps> = ({ items, totalItems }) => {
  return (
    <div
      key={items}
      className="border p-8 border-border cursor-pointer transition-colors group hover:border-primary hover:bg-primary hover:text-white"
    >
      <BiCategory size={47} className="text-primary group-hover:text-white" />
      <div className="mt-7">
        <div className="text-2xl font-semibold">Category</div>
        <div className="text-muted-foreground items-center inline-flex gap-1 mt-1 group-hover:text-white">
          <span className="text-sm">{totalItems} jobs available</span>
          <HiOutlineArrowNarrowRight className="hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;