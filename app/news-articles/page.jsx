import FramerMotion from "@/components/FramerMotion";
import React from "react";

function NewsArticle() {
  return (
    <FramerMotion>
      <div className="p-14">
        <h2 className="text-2xl font-bold mb-4">News & Articles</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 px-4 mb-4">
            <div className="relative overflow-hidden rounded-lg">
              {/* Replace the iframe source with the YouTube embed URL */}
              <iframe
                src="https://www.youtube.com/embed/zuXgaVFqcn0"
                frameBorder="0"
                allowFullScreen
                className="w-full h-56 md:h-64 lg:h-72"
              ></iframe>
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold">News</p>
            </div>
          </div>

          <div className="w-1/2 px-4 mb-4">
            <div className="relative overflow-hidden rounded-lg">
              {/* Replace the iframe source with the YouTube embed URL */}
              <iframe
                src="https://www.youtube.com/embed/6zb6CtcM8Hs"
                frameBorder="0"
                allowFullScreen
                className="w-full h-56 md:h-64 lg:h-72"
              ></iframe>
            </div>

            <div className="mt-2">
              <p className="text-lg font-semibold">Articles</p>
              <p className="text-gray-500">
                Wifi 6 will continue to grow at huge levels - By Ken Stober
              </p>
            </div>
          </div>

          {/* Add more pairs of video elements as needed */}
        </div>
      </div>
    </FramerMotion>
  );
}

export default NewsArticle;
