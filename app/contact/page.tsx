import About from "@/components/About";
import Drop from "@/components/shared/Drop";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="background">
      <section className="w-full hero-height container mx-auto">
        <div className="flex h-full">
          <div className="w-[20%] BorderR">
            <div className="BorderB">
              <Drop title="Contacts" type="contacts" />
            </div>
            <Drop title="find-me-also-in" type="links" />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="w-full h-fit border border-[#607B96] mb-3">
              <div className="BorderR w-fit h-fit flex justify-center items-center gap-1 p-3">
                <h1 className="Text text-sm">contacts</h1>
                <Image
                  src="/icons/close-icon.svg"
                  alt="close"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <section className="flex h-full">
              <div className="p-3 w-[50%] border-r border-r-[#607B96] h-full flex items-center flex-col relative">
                <div>
                  <h1 className="text-[#607B96] pb-2">_name:</h1>
                  <input
                    type="text"
                    className="w-34 py-1 px-3 border-2 border-[#607B96] bg-[#050e17] rounded-lg focus:outline-none text-[#607B96] mb-2"
                  />
                </div>
                <div>
                  <h1 className="text-[#607B96] pb-2">_email:</h1>
                  <input
                    type="email"
                    className="w-34 py-1 px-3 border-2 border-[#607B96] bg-[#050e17] rounded-lg focus:outline-none text-[#607B96] mb-2"
                  />
                </div>
                <div>
                  <h1 className="text-[#607B96] pb-2">_message</h1>
                  <textarea
                    className="w-full h-full py-1 px-5 border-2 border-[#607B96] bg-[#050e17] rounded-lg focus:outline-none text-[#607B96] mb-2"
                  />
                </div>
                <div className="absolute bottom-[20%] left-[23%]">
                <button type="submit" className="bg-[#1C2B3A] text-white text-sm px-2 py-1 rounded-md">
                    submit-message
                </button>
                </div>
              </div>
              <div>
                <About/>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
