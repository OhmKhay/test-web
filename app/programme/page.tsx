import React from "react";
import { Newsletter } from "../components/Newsletter";
import { Pricing } from "../components/Pricing";

function faqPage() {
  return (
    <>
      <section className="container mt-[3.6rem] w-full grid gap-10 h-[15.625rem] pt-8 from-blue-900  lg:grid-cols-2 place-items-center">
        <h1 className="text-2xl font-bold text-white">Collaboration Program</h1>
      </section>
      ;
   
   <Pricing />
      <Newsletter />
    </>
  );
}

export default faqPage;
