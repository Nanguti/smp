import FramerMotion from "@/components/FramerMotion";
import React from "react";

function Webinars() {
  return (
    <FramerMotion>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Webinars</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 px-4 mb-4">
            <div className="relative overflow-hidden rounded-lg">
              {/* Replace the iframe source with your YouTube video URL */}

              <iframe
                className="w-full h-56 md:h-64 lg:h-72"
                src="https://www.youtube.com/embed/_EHCwkzpJhU?si=zzAPUTJ_E2ruOyxW"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="mt-2">
              <p className="text-gray-500">
                <a href="https://www.youtube.com/watch?v=_EHCwkzpJhU"></a>
                Watch our webinar with Siklu on Multi-gigabit solutions for East
                and Central Africa
              </p>
            </div>
          </div>

          {/* Add more pairs of video elements as needed */}
        </div>
      </div>
    </FramerMotion>
  );
}

export default Webinars;
