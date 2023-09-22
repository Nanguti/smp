import FramerMotion from "@/components/FramerMotion";
import React from "react";

function Newsletter() {
  return (
    <FramerMotion>
      {" "}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">
          <span className="relative inline-block">
            Newsletter
            <hr></hr>
          </span>
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 px-4 mb-4">
            <div className="mt-2">
              <p className="text-gray-500">
                {" "}
                <a href="/assets/pdf/Simplifi_Newsletter_Oct_2021.pdf">
                  Simplifi Newsletter October 2021
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

export default Newsletter;
