import { ArrowRight, Trophy, Users } from "lucide-react";
import Image from "next/image";

const KnowledgeDeliverySection: React.FC = () => {
  return (
    <div className="flex justify-center bg-background text-primary-text  pb-24 font-plus-jakarta-sans">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div className="flex flex-col justify-center w-full max-w-xl ">
          <span className="uppercase font-bold text-blue-500 text-sm bg-blue-100 w-fit py-2 px-3 rounded-sm">
            Knowledge Delivery
          </span>
          <p className="text-5xl font-semibold line-height-2 pt-8 pb-8 leading-13">
            Build & deliver
            <br /> courses with ease <br /> all through a <br />
            <span className="font-bold text-blue-600">unified platform.</span>
          </p>
          <p className="font-medium">
            Host well-structured & engaging courses for your learners. Enhance
            learner performance & watch your business grow multifold.
          </p>
          <div className="grid grid-cols-2 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">10k+</h3>
                <p className="text-sm text-gray-600">Active Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">95%</h3>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center bg-white w-full max-w-lg p-4 rounded-4xl">
            <Image
              src={"/images/landing-2.jpg"}
              sizes="100vw"
              className="h-auto w-auto"
              height={0}
              width={0}
              alt="landing-2"
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

export default KnowledgeDeliverySection;
