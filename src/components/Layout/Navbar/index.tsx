"use client";

import Image from "next/image";
import React, { FC } from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import MenuAuth from "@/components/organism/MenuAuth";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();

  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
    // return window.location.reload();
  };
  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image
            src={"/images/logo2.png"}
            alt="/images/logo2.png"
            width={150}
            height={36}
          />
        </div>
        <div>
          <Link
            href={"/find-jobs"}
            className="font-medium text-gray-400 mr-4 cursor-pointer"
          >
            Find Jobs
          </Link>
          <Link
            href={"/find-companies"}
            className="font-medium text-gray-400 cursor-pointer"
          >
            Browse Companies
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        {session ? (
          <MenuAuth signOut={handleLogout}>{session.user.name}</MenuAuth>
        ) : (
          <>
            <Button
              variant={"link"}
              onClick={() => router.push("/auth/sign-in")}
            >
              Login
            </Button>
            <Button onClick={() => router.push("/auth/sign-up")}>
              Sign Up
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
