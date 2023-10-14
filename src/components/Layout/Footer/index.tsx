import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface FooterProps {}

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];
const socialMediaImg = [
  "/images/soc-Facebook.png",
  "/images/soc-Instagram.png",
  "/images/soc-Twitter.png",
  "/images/soc-LinkedIn.png",
  "/images/soc-Dribbble.png",
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-slate-900 px-32 pt-16 pb-11">
      <div className="flex flex-row items-start justify-between">
        <div>
          <Image
            src={"/images/logo.png"}
            alt="/images/logo.png"
            width={160}
            height={36}
          />
          <div className="text-muted mt-8">
            Great platform for the job seeker that <br />
            passionate about startups. Find your dream job <br /> easier
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            About
          </div>
          <div className="space-y-5">
            {aboutLinks.map((item: string, i: number) => (
              <Link key={i} href={"/"} className="block text-muted">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Resources
          </div>
          <div className="space-y-5">
            {resourceLinks.map((item: string, i: number) => (
              <Link key={i} href={"/"} className="block text-muted">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Get job notification
          </div>
          <div className="text-muted">
            The latest jobs news, articles, sent to <br /> your inbox weekly
          </div>
          <div className="inline-flex mt-10 items-center gap-3">
            <Input className="py-5" placeholder="Email Address" />
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator className="mt-20 mb-11 bg-muted-foreground" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-slate-600">
          2021 @ JobHuntly. All right reserved.
        </div>
        <div className="space-x-3">
          {socialMediaImg.map((item: string, i: number) => (
            <Image
              key={i}
              src={item}
              alt={item}
              width={32}
              height={32}
              className="inline"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
