import { BarChart, Brain, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

const CommunicateSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-background text-primary-text  py-24 font-plus-jakarta-sans">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div className="flex flex-col justify-center w-full max-w-xl ">
          <span className="uppercase font-bold text-green-500 text-sm bg-green-100 w-fit py-2 px-3 rounded-sm">
            Communicate efficiently
          </span>
          <p className="text-5xl font-semibold line-height-2 pt-8 pb-8">
            Enhance learner engagement & <span className="font-bold text-green-600">retention.</span>
          </p>
          <p className="font-medium">
            Make the most of e-learning by fostering deeper connections, and
            watch retention rates soar. Transform your teaching approach for the
            modern age by ensuring every learner is captivated, committed, and
            coming back for more.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-2xl">95%</h3>
              </div>
              <p className="text-sm text-gray-600">Completion Rate</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Brain className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-2xl">87%</h3>
              </div>
              <p className="text-sm text-gray-600">Knowledge Retention</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-2xl">2.5x</h3>
              </div>
              <p className="text-sm text-gray-600">Engagement Boost</p>
            </div>
          </div>
          <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Interactive Learning Communities</h3>
                  <p className="text-gray-600">Foster peer-to-peer learning and collaboration</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                  <BarChart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Progress Tracking</h3>
                  <p className="text-gray-600">Real-time insights into learner performance</p>
                </div>
              </div>
            </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center bg-white w-full max-w-lg p-4 rounded-4xl">
            <Image
              src={"/images/landing-4.jpg"}
              sizes="100vw"
              className="h-auto w-auto"
              height={0}
              width={0}
              alt="landing-4"
            />
            {/* <p className="text-center text-sm font-semibold">
                Getting started is easy. Just share your name, contact info, and a
                bit about your learning needs — and you're all set to begin your
                journey
              </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicateSection;
