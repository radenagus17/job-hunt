"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { formSignUpSchema } from "@/lib/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  const form = useForm<z.infer<typeof formSignUpSchema>>({
    resolver: zodResolver(formSignUpSchema),
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof formSignUpSchema>) => {
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(val),
      });

      toast({
        title: "Successfully",
        description: "Thanks for signing up",
      });

      router.push("/auth/sign-in");
    } catch (error) {
      toast({
        title: "Error",
        description: `This is an error ${error}`,
      });
    }
  };

  return (
    <>
      <div className="text-3xl text-center font-semibold mb-7">
        Get more opportunities
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="Input Your Fullname..." {...field} />
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
                  <Input placeholder="Input Your Email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Input Your Password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Sign Up
          </Button>

          <div className="text-gray-500 text-sm mt-6">
            Have an account{" "}
            <Link className="text-primary" href={"/auth/sign-in"}>
              Sign In
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignUpPage;
