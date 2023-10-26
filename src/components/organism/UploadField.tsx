import React, {
  ChangeEvent,
  FC,
  HtmlHTMLAttributes,
  useRef,
  useState,
} from "react";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface UploadFieldProps {
  form: any;
}

const UploadField: FC<UploadFieldProps> = ({ form }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, setNameFile] = useState<string>("Attach Resume / CV");

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNameFile(e.target.files[0].name);
      form.setValue("resume", e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="font-semibold">Attach your resume</div>
      <div>
        <div>
          <div
            onClick={handleSelectFile}
            className="text-xs text-primary font-semibold p-3 cursor-pointer border-2 border-dashed border-primary text-center"
          >
            {nameFile}
          </div>
        </div>
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleFileChange}
          accept="application/pdf"
        />
      </div>
    </div>
  );
};

export default UploadField;
