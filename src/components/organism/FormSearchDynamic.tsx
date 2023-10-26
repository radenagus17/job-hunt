import { LocateFixed, Search } from "lucide-react";
import React, { FC } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { LOCATION_OPTIONS } from "@/constants";
import { optionType } from "@/types";

interface FormSearchDynamicProps {}

const FormSearchDynamic: FC<FormSearchDynamicProps> = ({}) => {
  return (
    <div className="w-max mx-auto">
      <div className="p-4 bg-background shadow-md inline-flex items-center gap-4 relative">
        <div className="inline-flex gap-3 items-center">
          <Search size={20} />
          <Input
            className="border-none py-5 w-[350px]"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <LocateFixed size={20} />
          <Select>
            <SelectTrigger className="w-[350px] border-none outline-none py-5 text-gray-500">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                <SelectItem key={item.id + i} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <p className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </p>
    </div>
  );
};

export default FormSearchDynamic;
