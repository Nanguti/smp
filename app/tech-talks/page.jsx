import FramerMotion from "@/components/FramerMotion";
import React from "react";

function TechTalks() {
  return (
    <FramerMotion>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">
          <span className="relative inline-block">
            Tech Talks
            <span className="absolute h-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bottom-0"></span>
          </span>
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 px-4 mb-4">
            <div className="mt-2">
              <p className="text-gray-500">
                {" "}
                <a href="/assets/pdf/ProtectingChildrenOntheInternetWhitePaper-docx.pdf">
                  Protecting Children on the Internet White Paper
                </a>{" "}
              </p>
            </div>
          </div>

          {/* Add more content as needed */}
        </div>
      </div>
    </FramerMotion>
  );
}

export default TechTalks;
