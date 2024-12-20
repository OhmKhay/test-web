import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}
/* eslint-disable  @typescript-eslint/no-explicit-any */
const AcademicProgrammeList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <MagnifierIcon />,
  },
];

export const ProgrammeService = () => {
  return (
    <section className="container py-18 sm:py-24">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
              Academics {"  "}
            </span>
            Programmes
          </h2>

          <p className="mt-4 mb-8 text-xl text-muted-foreground ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p>

          <div className="flex flex-col gap-8">
            {AcademicProgrammeList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="p-1 mt-1 rounded-lg bg-primary/20">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="mt-2 text-md">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={'/assets/cube-leg.png'}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
