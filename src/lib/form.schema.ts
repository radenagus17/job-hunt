import { z } from "zod";

export const formFilterSchema = z.object({
  // validatisi array harus ke isi
  // categories: z.array(z.string()).refine((val) => val.some((item) => item)),
  categories: z.array(z.string()),
});

export const formFilterCompanySchema = z.object({
  industries: z.array(z.string()),
});

export const formApplySchema = z.object({
  resume: z.any().refine((file: any) => file?.name, "Please upload Resume"),
  fullname: z
    .string({ required_error: "Fullname is required" })
    .min(5, { message: "Fullname have 5 min characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email not valid" }),
  phone: z.string().min(6, { message: "Phone have min 6 characters" }),
  previousJobTitle: z.string(),
  linkedin: z.string(),
  portfolio: z.string(),
  coverLetter: z.string(),
});

export const formSignSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email not valid" }),
  password: z.string({ required_error: "Password is required" }),
});

export const formSignUpSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email not valid" }),
  password: z.string({ required_error: "Password is required" }),
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name should have at least 3 characters" }),
});
