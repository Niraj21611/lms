"use client"

import React, { useState } from 'react';

const PopularCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Development', 'Business', 'Design', 'Marketing'];

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp 2024',
      instructor: 'Fatema fiha',
      price: 17.99,
      originalPrice: 114.99,
      rating: 4.7,
      students: 25145,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      category: 'Development',
      bestseller: true,
    },
    {
      id: 2,
      title: 'Financial Analysis & Investment Management',
      instructor: 'Leonel money',
      price: 17.99,
      originalPrice: 114.99,
      rating: 4.5,
      students: 18230,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop',
      category: 'Business',
      bestseller: false,
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals with Figma',
      instructor: 'Abrar islam',
      price: 17.99,
      originalPrice: 114.99,
      rating: 4.8,
      students: 32456,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      category: 'Design',
      bestseller: true,
    },
    {
      id: 4,
      title: 'Python Programming Masterclass',
      instructor: 'Sarah Johnson',
      price: 17.99,
      originalPrice: 109.99,
      rating: 4.6,
      students: 45678,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
      category: 'Development',
      bestseller: true,
    },
    {
      id: 5,
      title: 'Digital Marketing Complete Course',
      instructor: 'Michael Chen',
      price: 17.99,
      originalPrice: 99.99,
      rating: 4.4,
      students: 19876,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      category: 'Marketing',
      bestseller: false,
    },
    {
      id: 6,
      title: 'Business Strategy & Leadership',
      instructor: 'Emma Watson',
      price: 17.99,
      originalPrice: 119.99,
      rating: 4.7,
      students: 28934,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
      category: 'Business',
      bestseller: true,
    },
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Popular courses</h1>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'text-slate-900 border-b-2 border-slate-900 -mb-4'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200 rounded overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
            >
              {/* Course Image */}
              <div className="relative h-36 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="p-3">
                <h3 className="text-base font-bold text-slate-900 mb-1 line-clamp-2 min-h-12">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 mb-2">
                  {course.instructor}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-sm font-bold text-amber-800">{course.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current text-amber-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">({course.students.toLocaleString()})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-slate-900">€{course.price}</span>
                  <span className="text-sm text-slate-500 line-through">€{course.originalPrice}</span>
                </div>

                {/* Bestseller Badge */}
                {course.bestseller && (
                  <div className="inline-block">
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5">
                      Bestseller
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-slate-50 rounded">
              <p className="text-slate-600 text-lg mb-4">No courses found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="px-5 py-2 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
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