"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "../SearchManufacturer";
import Image from "next/image";

interface SearchButtonProps {
  styles?: string;
}
const SearchButton = ({ styles }: SearchButtonProps) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${styles}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt="search button"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string | null>("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") return;

    updateSearchParams(manufacturer?.toLowerCase()!, model.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) searchParams.set("model", model);
    else searchParams.delete("model");

    if (manufacturer) searchParams.set("manufacturer", manufacturer);
    else searchParams.delete("manufacturer");

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}#discover`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item ">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <SearchButton styles="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
