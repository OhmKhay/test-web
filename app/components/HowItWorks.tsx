import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Academics: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Choose a Program",
    description:
      "Research and select the program that best fits your interests and goals.",
  },
  {
    icon: <MapIcon />,
    title: "Complete Application",
    description:
      "Fill out the application form and submit all required documents (transcripts, personal statements, etc.).",
  },
  {
    icon: <PlaneIcon />,
    title: "Submit Application Fee",
    description:
      "Pay the application fee (if required) to complete the submission.",
  },
  {
    icon: <GiftIcon />,
    title: "Receive Admission Decision",
    description:
      "Track your application status and confirm your enrollment once admitted.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container py-24 text-center sm:py-32"
    >
      <h2 className="text-3xl font-bold md:text-4xl ">
      Admission  {' '}
      
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
        Process: {' '}
        </span>
        A Simple Step-by-Step Guide
      </h2>
      <p className="mx-auto mt-4 mb-8 text-xl md:w-3/4 text-muted-foreground">
      Follow our step-by-step guide to complete your application and secure your spot. The process is easy to follow, ensuring a smooth experience from start to finish.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Academics.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
