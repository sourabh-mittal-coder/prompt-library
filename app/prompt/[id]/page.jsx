"use client";

import PromptCard from "@components/PromptCard";
import Hero from "@components/Hero";
import { useEffect, useState } from "react";
import Link from "next/link";

const prompt = ({ params }) => {
  const [post, setPost] = useState();
  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${params?.id}`);
      const data = await response.json();
      setPost(data);
    };
    getPromptDetails();
  }, []);
  return (
    <>
      <Hero />
      <div className="mt-10">
        {post ? (
          <PromptCard post={post}></PromptCard>
        ) : (
          <p className="desc text-center ">Prompt Not Available</p>
        )}
      </div>
      <Link href="/" className="black_btn mt-5">
        Explore More Prompts
      </Link>
    </>
  );
};

export default prompt;
