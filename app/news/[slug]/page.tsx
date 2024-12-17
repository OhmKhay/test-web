/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api/axios"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import Image from "next/image"
import Link from "next/link"


interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  date: string
  content: string
  author: {
    name: string
    bio: string
  }
  bannerImage: string
}

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
  slug: string
}

const BlogCard = ({ title, excerpt, date, category, imageUrl, slug }: BlogCardProps) => (
  <Link href={`/blog/${slug}`} className="group">
    <div className="space-y-3">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold group-hover:underline">{title}</h3>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{category}</span>
        <span>{date}</span>
      </div>
    </div>
  </Link>
)

const relatedArticles = [
  {
    title: "10 Essential Web Development Trends for 2023",
    excerpt: "Stay ahead of the curve with these cutting-edge web development trends that are shaping the industry in 2023.",
    date: "August 28, 2023",
    category: "Web Development",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "web-development-trends-2023"
  },
  {
    title: "The Rise of Progressive Web Apps",
    excerpt: "Discover how Progressive Web Apps are revolutionizing the way we build and use web applications.",
    date: "September 5, 2023",
    category: "Mobile Development",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "rise-of-progressive-web-apps"
  },
  {
    title: "Mastering Responsive Design: Tips and Tricks",
    excerpt: "Learn the essential techniques for creating truly responsive websites that look great on any device.",
    date: "September 12, 2023",
    category: "UI/UX Design",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "mastering-responsive-design"
  }
]

const RelatedArticles = () => (
  <Card>
    <CardHeader>
      <h2 className="text-2xl font-bold">Related Articles</h2>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article, index) => (
          <BlogCard key={index} {...article} />
        ))}
      </div>
    </CardContent>
  </Card>
)

async function getBlogPost(slug: string): Promise<BlogPost> {

  const { data } = await axiosInstance.get(`/posts/${slug}`)
 
  return data;
}

export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {
  
  const { data }: any  = await getBlogPost(params.slug)

  const post = {
    id: data?.id,
    ...data?.attributes
  }


  return (
    <div className="container px-4 py-8 mx-auto mt-8">
      <div className="mb-8">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 flex items-end bg-black bg-opacity-50">
            <div className="p-6 text-white">
              <Badge className="mb-2 bg-primary text-primary-foreground">{post.category?.data?.attributes?.name}</Badge>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="text-lg">Published on {post.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post?.content }} />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="#">Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
         
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Share This Article</h2>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-12">
        <RelatedArticles />
      </div>
    </div>
  )
}