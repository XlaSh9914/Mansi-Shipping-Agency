import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import { ArrowRight, Newspaper, Globe, ShieldCheck } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

import DefaultLayout from "@/layouts/default";

export default function BlogPage() {
  const featuredPost = {
    title: "Revolutionizing Logistics: The Future of Supply Chain Management",
    excerpt:
      "Explore how Mansi Shipping Agency is leveraging advanced technology to transform logistics for industries like oil and gas, aerospace, and green energy.",
    date: "July 20, 2025",
    author: "Ravi Sharma",
    image: "https://via.placeholder.com/600x400?text=Logistics+Innovation",
    slug: "/blog/revolutionizing-logistics",
  };

  const recentPosts = [
    {
      title: "Navigating Compliance in Hazardous Cargo Logistics",
      excerpt:
        "Learn about the complexities of handling hazardous products and how our compliance expertise ensures safety and efficiency.",
      date: "July 15, 2025",
      author: "Priya Mehta",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFVik5asMeXsw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695291849064?e=2147483647&v=beta&t=T4RtVa6w4kf_KD8f4_9vPEK4CkPDkkMMPEbBsMGmkvo",
      slug: "/blog/hazardous-cargo-compliance",
    },
    {
      title: "Green Energy Logistics: Powering the Future",
      excerpt:
        "Discover how Mansi Shipping Agency supports solar and wind industries with tailored logistics solutions.",
      date: "July 10, 2025",
      author: "Anil Kumar",
      image:
        "https://lot.dhl.com/wp-content/uploads/2024/08/lot_66d19772027f52.29236814.jpg",
      slug: "/blog/green-energy-logistics",
    },
    {
      title: "Global Supply Chains: Lessons from Oil & Gas Logistics",
      excerpt:
        "Insights into managing efficient supply chains for the oil and gas industry with our global network.",
      date: "July 5, 2025",
      author: "Sneha Patel",
      image:
        "https://www.plslogistics.com/wp-content/uploads/2022/08/5fac4d6553ec9b169e238270_iStock-1197308344-1.jpg",
      slug: "/blog/oil-gas-supply-chains",
    },
  ];

  const breadcrumbTrail = [
    { label: "Home", icon: <TiHome />, href: "/" },
    { label: "Blog", icon: <Newspaper /> },
  ];

  return (
    <DefaultLayout breadcrumbs={breadcrumbTrail}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 backdrop-blur-md flex items-center justify-center z-10">
          <h1 className="text-6xl font-bold text-primary drop-shadow-lg">
            Coming Soon...
          </h1>
        </div>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Chip className="mb-4" color="primary" variant="flat">
                Recent Posts
              </Chip>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore Our Latest Logistics Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dive into our collection of articles covering trends,
                challenges, and solutions in logistics for industries like green
                energy, oil and gas, and more.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-none bg-white group"
                >
                  <CardHeader className="p-0 h-48 overflow-hidden">
                    {/* <Image
                      src={post.image}
                      alt={post.title}
                      className="rounded-t-lg"
                    /> */}
                  </CardHeader>
                  <CardBody className="pt-4 place-content-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <span>{post.date}</span>
                        <span>By {post.author}</span>
                      </div>
                      <Button
                        className="bg-blue-600 text-white hover:bg-blue-700 font-semibold"
                        size="sm"
                        href={post.slug}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-[10px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Ahead with Logistics Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our blog for the latest updates, trends, and expert
            advice on logistics solutions from Mansi Shipping Agency.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Insights</h3>
              <p className="text-blue-100 text-sm">Worldwide Industry Trends</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Expert Knowledge
              </h3>
              <p className="text-blue-100 text-sm">Industry Best Practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClockRotateLeft className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Timely Updates</h3>
              <p className="text-blue-100 text-sm">Stay Informed</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
