import React, { FC } from "react";
import { Form } from "@/components/ui/form";
import CheckBoxForm from "./CheckBoxForm";
import { filterformType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForms: filterformType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  formFilter,
  filterForms,
  onSubmitFilter,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {filterForms.map((item: filterformType, idx: number) => (
          <CheckBoxForm
            key={idx}
            formFilter={formFilter}
            items={item.items}
            label={item.label}
            name={item.name}
          />
        ))}
        <Button className="w-full mt-5">Apply Filter</Button>
        <Button className="w-full mt-3" variant={"outline"}>
          Reset Filter
        </Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
