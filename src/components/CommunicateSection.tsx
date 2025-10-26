"use client";

import { BookOpen, Users, TrendingUp, ArrowUpRight } from "lucide-react";
import { Variants, motion } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const CommunicateSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-white py-24 px-4 md:px-8">
      <div className="flex flex-col items-center w-full max-w-7xl gap-12">
        <motion.div
          className="flex flex-col items-center text-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="uppercase font-medium text-sm tracking-widest text-neutral-500 mb-4">
            Learning Platform
          </span>

          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900 max-w-3xl">
            One platform for all your learning needs
          </h2>

          <p className="text-neutral-600 mt-6 max-w-xl leading-relaxed">
            Remove all the friction that stands in the way of educational excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="flex flex-col p-10 rounded-none bg-[#2d4a3e] border border-neutral-300 min-h-[520px] relative overflow-hidden"
            variants={fadeInUp}
          >
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2 leading-tight">
                Track progress
              </h3>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
                effortlessly
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Monitor student performance in real-time with comprehensive analytics and insights
              </p>
            </div>
            
            <div className="flex-1 flex flex-col justify-end">
              {/* Weekly Activity Label */}
              <div className="mb-3">
                <span className="text-white/80 text-xs uppercase tracking-wider">Weekly Activity</span>
              </div>
              
              <div className="flex items-end justify-between gap-3 h-44 mb-4">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-white/20 rounded-t transition-all duration-500 hover:bg-white/30" style={{ height: '35%' }}></div>
                  <span className="text-white/60 text-xs">Mon</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-white/25 rounded-t transition-all duration-500 hover:bg-white/35" style={{ height: '50%' }}></div>
                  <span className="text-white/60 text-xs">Tue</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-white/30 rounded-t transition-all duration-500 hover:bg-white/40" style={{ height: '65%' }}></div>
                  <span className="text-white/60 text-xs">Wed</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full bg-white/35 rounded-t transition-all duration-500 hover:bg-white/45" style={{ height: '75%' }}></div>
                  <span className="text-white/60 text-xs">Thu</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 relative">
                  <div className="w-full bg-white/40 rounded-t transition-all duration-500 hover:bg-white/50" style={{ height: '85%' }}>
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center whitespace-nowrap">
                      <TrendingUp className="w-8 h-8 text-white mb-1" strokeWidth={1.5} />
                      <span className="text-white text-xl font-light">89%</span>
                    </div>
                  </div>
                  <span className="text-white/60 text-xs">Fri</span>
                </div>
              </div>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/20">
                <div className="text-center">
                  <div className="text-white text-lg font-light">245</div>
                  <div className="text-white/60 text-xs mt-0.5">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-lg font-light">18</div>
                  <div className="text-white/60 text-xs mt-0.5">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-lg font-light">4.8</div>
                  <div className="text-white/60 text-xs mt-0.5">Rating</div>
                </div>
              </div>
              
              {/* Additional metrics */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div>
                    <div className="text-white/90 text-sm font-light">156 hrs</div>
                    <div className="text-white/50 text-xs">Total Time</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div>
                    <div className="text-white/90 text-sm font-light">12 New</div>
                    <div className="text-white/50 text-xs">This Week</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between p-12 rounded-none bg-neutral-100 border border-neutral-300 min-h-[500px] relative"
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-neutral-900 mb-3 leading-tight">
                Engage learners
              </h3>
              <h3 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6 leading-tight">
                anywhere
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
                Create interactive learning experiences accessible from any device, anytime
              </p>
            </div>

            <div className="relative mt-8">
              {/* Learning Cards Stack */}
              <div className="relative h-64">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72">
                  {/* Card 1 - Back */}
                  <div className="absolute top-8 left-8 w-full h-40 bg-white border-2 border-neutral-300 transform rotate-3 rounded-lg shadow-md"></div>
                  
                  {/* Card 2 - Middle */}
                  <div className="absolute top-4 left-4 w-full h-40 bg-white border-2 border-neutral-300 transform -rotate-2 rounded-lg shadow-lg"></div>
                  
                  {/* Card 3 - Front */}
                  <div className="absolute top-0 left-0 w-full h-40 bg-white border-2 border-neutral-900 rounded-lg shadow-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-sm font-normal text-neutral-900">Current Lesson</div>
                          <div className="text-xs text-neutral-500">Chapter 4.2</div>
                        </div>
                      </div>
                      <div className="text-xs bg-neutral-900 text-white px-2 py-1 rounded">Live</div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-neutral-600">
                        <span>Progress</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full bg-neutral-900 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute bottom-0 left-0 bg-neutral-900 rounded-lg shadow-xl px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-white" strokeWidth={1.5} />
                    <div>
                      <div className="text-white text-lg font-light">1,234</div>
                      <div className="text-white/60 text-xs">Active Now</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 bg-white border-2 border-neutral-900 rounded-lg shadow-xl px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-neutral-900 text-lg font-light">+24%</div>
                      <div className="text-neutral-600 text-xs">This Week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunicateSection;