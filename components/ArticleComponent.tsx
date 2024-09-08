"use client";
import React, { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import WAVES from "vanta/src/vanta.waves";
import * as THREE from "three";
import Test from "../public/images/test.png";

interface Article {
  title: string;
  content: string;
  bloglink: string;
}

const topArticles: Article[] = [
  {
    title: "Learn to use Supabase with Next JS - A Beginner Friendly Application",
    content:
      "Building a simple application using Supabase on the backend and Next JS on the front end. This tutorial aims to help you grasp the process of easily writing and retrieving data from a database.",
    bloglink:
      "https://aahiknsv.hashnode.dev/learn-to-use-supabase-with-next-js-a-beginner-friendly-application",
  },
  {
    title: "Building a TODO Application in Solidity",
    content:
      "The article demonstrates how to create a to-do application using Solidity, a programming language for Ethereum smart contracts, providing a guide on building decentralized task management on the blockchain.",
    bloglink: "https://aahiknsv.hashnode.dev/building-a-todo-application-in-solidity",
  },
  {
    title: "Building a Simple Timer with Vanilla JavaScript",
    content:
      "The article provides a step-by-step guide for building a basic timer application in Vanilla JavaScript without additional frameworks or libraries.",
    bloglink:
      "https://aahiknsv.hashnode.dev/building-a-simple-timer-with-vanilla-javascript",
  },
  {
    title: "How to Send Emails in Node JS using the SendGrid API",
    content:
      "The article guides integrating SendGrid with Node.js for efficient email delivery, covering key steps like API key setup, email composition, and sending via the SendGrid service.",
    bloglink:
      "https://aahiknsv.hashnode.dev/how-to-send-emails-in-node-js-using-the-sendgrid-api",
  },
  // Add more articles as needed
];

const ArticleComponent: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x421469,
          shininess: 10.0,
          waveHeight: 25.0,
          waveSpeed: 1.3,
          zoom: 1.75,
        })
      );
    }
  }, [vantaEffect]);

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  return (
    <div
      className='top-articles bg-slate-950 w-full min-h-screen flex flex-col items-center justify-center'
      ref={vantaRef}
    >
      <h1 className='tracking-wider text-white text-4xl lg:text-5xl font-bold mb-4 mt-12'>
        Top Articles
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-12 mb-32 mx-10 xl:mx-32'>
        {topArticles.map((article, index) => (
          <div
            key={index}
            className='max-w-xl bg-slate-900 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105'
            data-aos='fade-up'
            data-aos-delay={`${index * 100}`}
          >
            <img src={Test.src} alt="" />
            {/* Article content */}
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2'>{article.title}</h2>
              <p className='text-sm mb-4'>{article.content}</p>

              {/* Link to full article */}
              <a
                href={article.bloglink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-purple-500 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-all'
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComponent;
