"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import {
  PlayCircleIcon,
  CloudSun,
  Sprout,
  BarChart,
  Leaf,
  Droplet,
  Sun,
  Wind,
  Badge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import createGlobe from "cobe";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white/80">
        {body}
      </blockquote>
    </motion.figure>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="h-full bg-white dark:bg-gray-800">
      <CardContent className="flex flex-col items-center text-center p-6">
        {icon}
        <h3 className="mt-4 font-semibold text-lg text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const cropYieldData = [
  { year: "2018", yield: 4200 },
  { year: "2019", yield: 4500 },
  { year: "2020", yield: 4800 },
  { year: "2021", yield: 5100 },
  { year: "2022", yield: 5400 },
  { year: "2023", yield: 5700 },
];

const LandingPage = () => {
  const [progress, setProgress] = useState(13);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "AgriAI has revolutionized my farming practices. The crop analysis is spot on!",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Sarah",
      username: "@sarahfarmer",
      body: "The weather predictions are incredibly accurate. It's saved my crops more than once.",
      img: "https://avatar.vercel.sh/sarah",
    },
    {
      name: "Mike",
      username: "@mikeagronomist",
      body: "The yield optimization suggestions have increased my productivity by 30%.",
      img: "https://avatar.vercel.sh/mike",
    },
    {
      name: "Emily",
      username: "@emilyorganic",
      body: "Market insights from AgriAI have helped me make informed decisions about what to grow.",
      img: "https://avatar.vercel.sh/emily",
    },
    {
      name: "David",
      username: "@davidtechfarmer",
      body: "The AI-powered pest detection has saved me thousands in potential crop losses.",
      img: "https://avatar.vercel.sh/david",
    },
    {
      name: "Lisa",
      username: "@lisasustainable",
      body: "AgriAI's soil health analysis has dramatically improved my land's fertility.",
      img: "https://avatar.vercel.sh/lisa",
    },
  ];

  const firstRow = [1, 2, 3];
  const secondRow = [4, 5, 6];
  const thirdRow = [7, 8, 9];
  const fourthRow = [10, 11, 12];
  const fifthRow = [13, 14, 15];

  return (
    <ContainerScroll titleComponent={""}>
      <main>
        <section>
          <div className="relative mb-12">
            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800">
              <svg
                viewBox="0 0 100 100"
                className="absolute -left-20 -top-10 transform-gpu overflow-hidden text-gray-800 dark:text-gray-200"
                fill="currentColor"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="gradient1" x1="0" x2="1" y1="1" y2="0">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 0h100v100H0z"
                  stroke="none"
                  fill="url(#gradient1)"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                />
              </svg>
            </div>
            <div className="flex flex-col items-center py-20">
              <h1 className="text-4xl font-bold text-center text-white dark:text-gray-100">
                Welcome to AgriAI
              </h1>
              <p className="mt-4 text-lg text-center text-gray-300 dark:text-gray-400">
                Revolutionizing agriculture with artificial intelligence.
              </p>
              <div className="flex mt-8 gap-4">
                <Button className="px-6 py-2" variant="default">
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button className="px-6 py-2" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Features
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<CloudSun className="h-8 w-8 text-yellow-500" />}
                title="Weather Insights"
                description="Get accurate and up-to-date weather forecasts to plan your farming activities."
              />
              <FeatureCard
                icon={<Droplet className="h-8 w-8 text-blue-500" />}
                title="Soil Health"
                description="Analyze soil conditions and get recommendations for improving soil health."
              />
              <FeatureCard
                icon={<BarChart className="h-8 w-8 text-green-500" />}
                title="Crop Yield Predictions"
                description="Predict crop yields based on historical data and current conditions."
              />
              <FeatureCard
                icon={<Sprout className="h-8 w-8 text-green-600" />}
                title="Pest Detection"
                description="Detect pests early and take preventive measures to protect your crops."
              />
              <FeatureCard
                icon={<Sun className="h-8 w-8 text-yellow-600" />}
                title="Market Insights"
                description="Get insights into market trends to make informed decisions about what to grow."
              />
              <FeatureCard
                icon={<Leaf className="h-8 w-8 text-green-700" />}
                title="Sustainable Practices"
                description="Receive recommendations for sustainable farming practices to ensure long-term productivity."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Crop Yield Analysis
            </h2>
            <div className="mt-8 flex justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={cropYieldData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="yield" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              User Reviews
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  img={review.img}
                  name={review.name}
                  username={review.username}
                  body={review.body}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Get Started with AgriAI
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Transform your farming with the power of AI. Sign up today!
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button className="px-6 py-2" variant="default">
                <Link href="/get-started">Sign Up</Link>
              </Button>
              <Button className="px-6 py-2" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
    </ContainerScroll>
  );
};

export default LandingPage;
