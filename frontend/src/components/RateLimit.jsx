import React from "react";
import { ZapIcon } from "lucide-react";
const RateLimit = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-start p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
            <p className="text-base-content mb-1">
              you have too many requests in a short period please waat a bit and
              try again.
            </p>
            <p className="text-base-content">
              If you think this is a mistake, please contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;
