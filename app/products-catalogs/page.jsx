import FramerMotion from "@/components/FramerMotion";
import React from "react";

function ProductsCatalogs() {
  return (
    <FramerMotion>
      <div className="container">
        <div className="overflow-x-auto mb-10 mt-8 ">
          <div className="gradient-title">Product Catalog</div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-8 py-4 bg-gray-100 text-left text-lg leading-6 font-medium text-gray-600 uppercase tracking-wider">
                  Number
                </th>
                <th className="px-8 py-4 bg-gray-100 text-left text-lg leading-6 font-medium text-gray-600 uppercase tracking-wider">
                  Name/Title
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-8 py-6 whitespace-no-wrap">1</td>
                <td className="px-8 py-6 whitespace-no-wrap">
                  <a href="/assets/pdf/ReyeeWirelessProductOverview.pdf">
                    Reyee Wireless Product Overview
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-8 py-6 whitespace-no-wrap">2</td>
                <td className="px-8 py-6 whitespace-no-wrap">
                  <a href="/assets/pdf/ReyeeProductCatalog2023.pdf">
                    Reyee Product Catalog 2023
                  </a>{" "}
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </FramerMotion>
  );
}

export default ProductsCatalogs;
