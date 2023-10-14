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

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = ({}) => {
  return (
    <>
      <div className="mt-6 p-4 bg-background shadow-md inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <Search size={20} />
          <Input
            className="border-none py-8 w-[300px]"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <LocateFixed size={20} />
          <Select>
            <SelectTrigger className="w-[300px] border-none outline-none py-8 text-gray-500">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Search my job</Button>
        </div>
      </div>
      <p className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Researcher, Android, Admin
      </p>
    </>
  );
};

export default FormSearch;
