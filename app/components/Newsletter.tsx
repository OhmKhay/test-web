'use client';
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {

  const handleSubmit = () => {

  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-4xl font-bold text-center md:text-5xl">
          Join Our Daily{" "}
          <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="mt-4 mb-8 text-xl text-center text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <form
          className="flex flex-col w-full gap-4 mx-auto md:flex-row md:w-6/12 lg:w-4/12 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="leomirandadev@gmail.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
