"use client";
import React, { useState } from "react";
import About from "@/components/About";
import Drop from "@/components/shared/Drop";
import Image from "next/image";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReturn = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="background">
      <section className="w-full hero-height size-full">
        <div className="h-full grid grid-cols-8">
          <div className="border border-[#607B96] border-y-0 border-l-0 flex min-h-full col-span-2 flex-col">
            <div className="border-b border-[#607B96]">
              <Drop title="Contacts" type="contacts" />
            </div>
            <Drop title="find-me-also-in" type="links" />
          </div>
          <div className="col-span-6 flex flex-col">
            <div className="w-full h-fit border-b border-b-[#607B96] flex items-center">
              <div className="border-r border-[#607B96] w-fit h-fit flex justify-center items-center gap-1 p-2">
                <h1 className="text-[#607B96]">contacts</h1>
                <Image
                  src="/icons/close-icon.svg"
                  alt="close"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="p-10 border-r border-r-[#607B96] flex flex-col justify-start flex-1">
                {isSubmitted ? (
                  <div className="flex justify-center items-center h-full w-full">
                    <div className="text-center">
                      <h1 className="text-white text-2xl mb-3">Thank you!&#32;🤟</h1>
                      <h2 className="text-[#607B96] mb-4">
                      Your message has been accepted. You will recieve answer really soon!
                      </h2>
                      <button
                        onClick={handleReturn}
                        className="bg-[#1C2B3A] text-white text-sm px-3 py-2 rounded-md"
                      >
                        send-new-message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full">
                    <div>
                      <h1 className="text-[#607B96] pb-2">_name:</h1>
                      <input
                        type="text"
                        className="w-full py-2 px-3 bg-[#050e17] rounded-lg focus:outline-[#607B96] text-[#607B96] mb-2"
                        required
                      />
                    </div>
                    <div>
                      <h1 className="text-[#607B96] pb-2">_email:</h1>
                      <input
                        type="email"
                        className="w-full py-2 px-3 bg-[#050e17] rounded-lg focus:outline-[#607B96] text-[#607B96] mb-2"
                        required
                      />
                    </div>
                    <div>
                      <h1 className="text-[#607B96] pb-2">_message:</h1>
                      <textarea
                        className="w-full h-full py-2 px-3 bg-[#050e17] rounded-lg focus:outline-[#607B96] text-[#607B96] mb-2"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-[#1C2B3A] text-white text-sm px-2 py-1 rounded-md mt-2"
                      >
                        submit-message
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className="flex-1">
                <About />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
