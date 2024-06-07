"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreButtonProps } from "@/types";
import { CustomButton } from "@/components";

const ShowMoreButton = ({ pageNumber, isNext }: ShowMoreButtonProps) => {
  const router = useRouter();

  
  const handleNavigation = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const newLimit = (pageNumber + 1) * 10;
    searchParams.set("limit", newLimit.toString());
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}#discover`;

    router.push(newPathname);
  };

  return !isNext ? (
    <div className="w-full flex-center gap-5 mt-10 mb-3">
      <CustomButton
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    </div>
  ) : (
    <></>
  );
};

export default ShowMoreButton;
