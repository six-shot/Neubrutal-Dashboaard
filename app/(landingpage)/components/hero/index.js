import Navbar from "@/app/components/navbar";
import React from "react";
import muees from "@/public/muees.webp";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="h-[80vh] flex justify-center items-center ">
          <div className="relative ">
            <h2 className="text-[200px] text-center uppercase text-black font-arcade  font-medium">
              OYA i would sleep
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
