import React, { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface BannerSignUpProps {}

const BannerSignUp: FC<BannerSignUpProps> = ({}) => {
  return (
    <div className="mt-32 mb-10 bg-primary text-primary-foreground px-16 pt-16 flex flex-row justify-between items-start">
      {/* text */}
      <div>
        <div className="text-5xl font-semibold">
          Start posting <br /> jobs today
        </div>
        <div className="my-6">Start posting job for only $10</div>
        <Button
          className="hover:text-primary text-primary"
          size={"lg"}
          variant={"secondary"}
        >
          Sign Up for Free
        </Button>
      </div>
      {/* image */}
      <div>
        <Image
          src={"/images/dashboard.png"}
          alt="/images/dashboard.png"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default BannerSignUp;
