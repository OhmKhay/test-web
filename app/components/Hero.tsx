import { Button } from "./ui/button";

import BackgroundImageCarousel from "./BackgrondCarousel";

export const Hero = () => {
  return (
    <section className="container grid gap-10 py-2 lg:grid-cols-2 place-items-center md:py-2">
      <div className="space-y-6 text-center lg:text-start">
       
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline text-4xl">
            <span className="inline text-[0.8rem] text-black bg-gradient-to-r text-transparent bg-clip-text">
            Shan Community College
            </span>{" "}
            <br />
           <span className="text-primary">
           Education &
           </span>
          </h1>{" "}
      
          <h2 className="inline text-4xl">
            <span className="inline bg-gradient-to-r text-primary bg-clip-text">
            Empowerment for Shan Communities
            </span>{" "}
         
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
        Kaw Dai empowers Shan communities through education, sustainable development, and youth capacity building since 1999.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Explore More</Button>

        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-0">
        {/* <HeroCards /> */}
        <BackgroundImageCarousel />
      </div>

      {/* Shadow effect */}
      <div className="shadow">

      </div>
    </section>
  );
};
