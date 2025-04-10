import { Globe, Smartphone } from "lucide-react";
import Image from "next/image";

const MonetizeSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-background text-primary-text  py-24 font-plus-jakarta-sans">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div>
          <div className="flex flex-col items-center justify-center bg-white w-full max-w-lg p-4 rounded-4xl">
            <Image
              src={"/images/landing-3.jpg"}
              sizes="100vw"
              className="h-auto w-auto"
              height={0}
              width={0}
              alt="landing-3"
            />
            {/* <p className="text-center text-sm font-semibold">
                Getting started is easy. Just share your name, contact info, and a
                bit about your learning needs — and you're all set to begin your
                journey
              </p> */}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full max-w-xl ">
          <span className="uppercase font-bold text-purple-500 text-sm bg-purple-100 w-fit py-2 px-3 rounded-sm">
            monetize your expertise
          </span>
          <p className="text-5xl font-semibold line-height-2 pt-8 pb-8">
            Build a training <br /> academy that's truly yours — fully
            white-labelled, <span className="font-bold text-purple-600">fully you.</span>
          </p>
          <p className="font-medium">
            Step into the spotlight with a white-labelled LMS tailored to your
            brand's essence. Elevate learning with a unique training experience,
            personalized domain, and dedicated mobile app.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Custom Domain</h3>
                <p className="text-gray-600">
                  Your brand, your domain 
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">support</h3>
                <p className="text-gray-600">
                  Dedicated support 
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                Trusted by 1000+ creators
              </p>
              <div className="flex items-center text-yellow-400 text-sm">
                {"★".repeat(5)}{" "}
                <span className="text-gray-600 ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizeSection;
