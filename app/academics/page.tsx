import React from "react";
import { ProgrammeService } from "../components/AcademicProgramme";
import { Cta } from "../components/Cta";

function aboutPage() {
  return <>
   <section className="container mt-[3.6rem] w-full grid gap-10 h-[15.625rem] pt-16 bg-primary lg:grid-cols-2 place-items-center">
    <h1 className="text-2xl font-bold text-white">Academics</h1>
  </section>;
  <ProgrammeService />
  <Cta />
  </>
}

export default aboutPage;
