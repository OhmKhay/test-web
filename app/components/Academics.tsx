'use client';
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { axiosInstance } from "@/api/axios";

interface FeatureProps {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
}


const featureList: string[] = [
  "University",
  "Academic",
  "Education",
  "Courses",
  "Research",
  "Library",
  "Exams",
  "Grades",
  "Scholarships",
];

export const Academics = async () => {


  const router  = useRouter();

  const { data } = await axiosInstance.get('/posts')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatData = data&&data?.data?.map((item: any) => {
    return  ({
      id: item?.id,
      ...item?.attributes
    })
  })
  
  return (
    <section
      id="Academics"
      className="container py-24 space-y-8 sm:py-32"
    >
      <h2 className="text-3xl font-bold lg:text-4xl md:text-center">
      SCC {" "}
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
         Today
        </span>
      </h2>

      <p className="text-center">
      Stay updated with the latest news and announcements from SCC University!
      </p>

      <div className="flex flex-wrap gap-4 md:justify-center">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {formatData.map(({ id, title, slug, content, imageUrl }: FeatureProps) => (
          <Card onClick={() => {
         
            router.push(`/news/${slug}`)

          }} id={id} key={title}>

            <CardFooter>
              <img
                src={imageUrl}
                alt="About feature"
                className="w-full mx-auto object-cover h-[12.5rem] rounded-t-lg"
              />
            </CardFooter>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{content?.length > 120 ? `${content?.substring(0,120)} ...`: content}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

