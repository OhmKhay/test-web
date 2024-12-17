import React from "react";
import { Cta } from "../components/Cta";
import Motion from "../components/Motion";
import { HowItWorks } from "../components/HowItWorks";

function admissionPage() {
  return <>
   <section className="container mt-[3.6rem] w-full grid gap-10 h-[15.625rem] pt-8 bg-primary lg:grid-cols-2 place-items-center">
    <Motion>
    <h1 className="text-2xl font-bold text-white">Admission</h1>
    </Motion>
  </section>;
   <HowItWorks />
  <Cta />
  </>
}

export default admissionPage;
