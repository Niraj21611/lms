"use client"

import React, { useState } from 'react';

const PopularCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Development', 'Business', 'Design', 'Marketing'];

  const courses = [
    {
      id: 1,
      title: 'Expert Instructor',
      instructor: 'Fatema fiha',
      price: 60,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      category: 'Development',
    },
    {
      id: 2,
      title: 'Finance',
      instructor: 'Leonel money',
      price: 60,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      category: 'Business',
    },
    {
      id: 3,
      title: 'Design',
      instructor: 'Abrar islam',
      price: 60,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      category: 'Design',
    },
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">Popular courses</h1>
            <p className="text-slate-600 text-lg">Explore our most sought-after learning experiences</p>
          </div>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-indigo-100/50"
            >
              {/* Course Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white text-slate-900 font-bold px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-95 border border-slate-100">
                  <span className="text-xl font-extrabold text-indigo-600">${course.price}</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-slate-600 text-sm">
                    <span className="font-medium">by {course.instructor}</span>
                  </p>
                  <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">
                    View Course →
                  </button>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-md border border-slate-200">
              <p className="text-slate-500 text-lg font-medium">No courses found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
              >
                View All Courses
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;