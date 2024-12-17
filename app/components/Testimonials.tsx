import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://res.cloudinary.com/dojqxb8t9/image/upload/v1726906294/scc-student/Syylurn_Huar-CTuu1L8v_etnjoe.jpg",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
  {
    image: "https://res.cloudinary.com/dojqxb8t9/image/upload/v1726906295/scc-student/Sai_aung_kham_bawe-DhFMf6bA_bekghp.jpg",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },

  {
    image: "https://res.cloudinary.com/dojqxb8t9/image/upload/v1726907342/Tzarm_Num_Lao-CC-28jzY_nffklm.jpg",
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    image: "https://res.cloudinary.com/dojqxb8t9/image/upload/v1726906294/scc-student/Syylurn_Huar-CTuu1L8v_etnjoe.jpg",
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl font-bold md:text-4xl">
        What 
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          {" "}
          Our Students{" "}
        </span>
        Are Saying
      </h2>

      <p className="pt-4 pb-8 text-xl text-muted-foreground">
      At Shan Community College, students gain skills and experiences that shape their future. Discover their inspiring stories.
      </p>

      <div className="grid mx-auto space-y-4 md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md overflow-hidden md:break-inside-avoid"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
