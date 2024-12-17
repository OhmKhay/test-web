import React from "react";
import { FAQ } from "../components/FAQ";
import { Newsletter } from "../components/Newsletter";

function faqPage() {
  return (
    <>
      <section className="container mt-[3.6rem] w-full grid gap-10 h-[15.625rem] pt-8 bg-primary lg:grid-cols-2 place-items-center">
        <h1 className="text-2xl font-bold text-white">FAQ</h1>
      </section>
      <FAQ />
      <Newsletter />
    </>
  );
}

export default faqPage;
