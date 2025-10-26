import React from "react";
import { Link } from "react-router-dom";

const ViewBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "How Technology is Shaping the Future of Innovation",
      date: "October 10, 2025",
      number: "#001",
      image: "https://aeonictrumpetsoftruth.com/assets/BlogOne-BAzjKtYv.png",
    },
    {
      id: 2,
      title: "Top 5 Tips for Boosting Your Productivity",
      date: "October 11, 2025",
      number: "#002",
      image:
        "https://img.freepik.com/free-photo/woman-working-laptop-coffee-shop_1303-17072.jpg",
    },
    {
      id: 3,
      title: "Design Thinking and Its Role in Modern UI/UX",
      date: "October 12, 2025",
      number: "#003",
      image:
        "https://img.freepik.com/free-photo/ux-ui-designers-discussing-app-interface_53876-138106.jpg",
    },
    {
      id: 4,
      title: "Mastering React for Frontend Development",
      date: "October 13, 2025",
      number: "#004",
      image:
        "https://img.freepik.com/free-photo/developer-using-laptop_1098-18728.jpg",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-dark-blue to-secondary-blue py-16  custom-padding">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide ">
          Explore Our Latest Blogs
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover insights, stories, and tips from the world of technology, design, and productivity.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary-light"
          >
            {/* Blog Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <div className="flex justify-between text-gray-300 text-sm mb-3">
                  <span>{blog.date}</span>
                  <span className="text-primary-light font-semibold">
                    {blog.number}
                  </span>
                </div>
              </div>

              <Link
                to={`/blog/${blog.id}`}
                className="mt-auto bg-primary-light text-dark-blue font-semibold py-2 px-4 rounded-md text-center hover:bg-white hover:text-dark-blue transition-all duration-300"
              >
                Read Blog →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewBlog;
