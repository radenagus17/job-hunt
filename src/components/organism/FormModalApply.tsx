"use client";

import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formApplySchema } from "@/lib/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Separator } from "../ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import UploadField from "./UploadField";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { supabaseUploadFile } from "@/lib/supabase";

interface FormModalApplyProps {
  image: string | undefined;
  roles: string | undefined;
  location: string | undefined;
  jobType: string | undefined;
  id: string | undefined;
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const FormModalApply: FC<FormModalApplyProps> = ({
  image,
  roles,
  location,
  jobType,
  id,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof formApplySchema>) => {
    try {
      const {
        resume,
        coverLetter,
        linkedin,
        phone,
        portfolio,
        previousJobTitle,
      } = val;
      const { filename, error } = await supabaseUploadFile(resume, "applicant");

      const reqData = {
        userId: session?.user.id,
        jobId: id,
        resume: filename,
        coverLetter,
        linkedin,
        phone,
        portfolio,
        previousJobTitle,
      };

      console.log(coverLetter);
      if (error) throw "error";

      await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData),
      });

      await toast({
        title: "Success",
        description: "Apply job success",
      });

      wait().then(() => setOpen(false));
      router.replace("/");
    } catch (error) {
      console.log(error);
      await toast({
        title: "Error",
        description: "Please try again",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-lg px-12 py-6" size={"lg"}>
          Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div>
          <div className="inline-flex items-center gap-4">
            <div>
              <Image src={image!!} alt={image!!} width={60} height={60} />
            </div>
            <div>
              <div className="text-lg font-semibold">{roles}</div>
              <div className="text-gray-500">
                {location} . {jobType}
              </div>
            </div>
          </div>
          <Separator className="my-5" />
          <div className="mb-5">
            <div className="font-semibold text-lg">Submit your application</div>
            <div className="text-gray-500 text-sm mt-2">
              The following is required and will only be shared with Nomad
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your fullname" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="previousJobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current of previous job title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's your current of previous job title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
              <h2 className="font-semibold">LINKS</h2>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Link to your linkedIn URL"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Link to your portfolio URL"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add a cover letter or anything else you want to share"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <UploadField form={form} />
              <Button className="w-full">Submit Application</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalApply;
