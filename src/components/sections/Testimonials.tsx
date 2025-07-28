'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jane Cooper',
    title: 'CEO, SomeCompany',
    text: 'ADmyBRAND AI Suite helped us scale our marketing campaigns with remarkable efficiency.',
    image: '/Avatar Style.jpg',
    rating: 5,
  },
  {
    name: 'John Doe',
    title: 'CMO, AnotherCompany',
    text: 'The insights from the AI Suite were game-changing for our strategy.',
    image: '/Avatar Style.jpg',
    rating: 4,
  },
  {
    name: 'Alice Smith',
    title: 'Founder, StartupX',
    text: 'Truly a revolutionary tool in the martech space!',
    image: '/Avatar Style.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">
          What Our Users Say
        </h2>
        <blockquote className="max-w-2xl mx-auto text-xl italic text-gray-600 dark:text-gray-300 mb-6">
          &ldquo;{testimonials[activeTestimonial].text}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <Image
            src={testimonials[activeTestimonial].image}
            alt={testimonials[activeTestimonial].name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {testimonials[activeTestimonial].name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonials[activeTestimonial].title}
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < testimonials[activeTestimonial].rating
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}