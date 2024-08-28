import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Textarea from "@/components/ui/textarea";

import Footer from "@/components/ui/footer";


const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        
        <div className="flex flex-col md:flex-row p-8 mt-11 font-Poppins">
          {/* Notes Section */}
          <div className="text-black w-full md:w-1/2 mr-4 mx-11">
            <p className="my-5 flex items-center font-bold">
              <span className="mr-2">
                <FaPhone className="text-xl text-purple-700" />{" "}
                {/* Call icon */}
              </span>
              Contact us
            </p>
            <p className="my-5 text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="my-5 text-sm">Phone: 0452240290</p>

            {/* Horizontal Black Bar */}
            <div className="w-3/4 h-1 bg-black my-4"></div>

            <p className="my-5 flex items-center font-bold">
              <span className="mr-2">
                <FaEnvelope className="text-xl text-purple-700" />{" "}
                {/* Email icon */}
              </span>
              Write to us
            </p>
            <p className="my-5 text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="my-5 text-sm">Emails: mplace@gmail.com</p>
          </div>

          {/* Textarea Section */}
          <div className="w-full md:w-1/2">
            <Textarea customWidth="w-full" customHeight="h-80" />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default Page;
