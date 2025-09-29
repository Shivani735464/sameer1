import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amit Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Amazing",
    rating: 5,
  },
  {
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review: "I Like It",
    rating: 4,
  },
  {
    name: "Rahul Singh",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    review: "Wonderful",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    review: "Great",
    rating: 5,
  },
];

export default function HomeReviews() {
  // ✅ Loop को smooth रखने के लिए array को 3 बार duplicate किया
  const loopReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center mb-12">
        Our <span className="text-blue-300">Reviews</span>
      </h1>

      {/* Infinite Scroll Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-x">
          {loopReviews.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 mx-3 w-64 sm:w-72 md:w-80 flex-shrink-0"
            >
              {/* User Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 border-4 border-blue-100 mx-auto"
              />

              {/* Name */}
              <h2 className="text-md sm:text-lg font-semibold text-white text-center mb-2">
                {item.name}
              </h2>

              {/* Review */}
              <p className="text-gray-200 text-center text-xs sm:text-sm mb-3 break-words">
                {item.review}
              </p>

              {/* Rating */}
              <div className="flex justify-center">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for infinite smooth animation */}
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } 
          }
          .animate-scroll-x {
            animation: scroll-x 25s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
}