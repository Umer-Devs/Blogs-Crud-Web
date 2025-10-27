import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import axios from 'axios'

const CreateBlog = () => {
  const [form, setForm] = useState({
    image: "",
    title: "",
    blogData: "",
  });

  // ✅ handle text and file inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // ✅ handle ReactQuill editor
  const handleEditorChange = (value) => {
    setForm((prev) => ({
      ...prev,
      blogData: value,
    }));
  };

  // ✅ handle form submit
  const handleSubmit  = async (e) => {
    e.preventDefault();
    try {
        await axios.post("",form)
    } catch (error) {
      console.log("failed to sent blog data to backend",error);
      
    }
  };

  return (
    <>
      <section className="bg-dark-blue w-full min-h-screen flex items-center justify-center custom-padding">
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-center font-bold italic text-white underline text-3xl mb-8">
            Create Blog
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* File Input */}
            <label className="flex flex-col">
              <span className="text-white mb-2 font-medium">Upload Cover Image</span>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="bg-white text-dark-blue rounded-md h-12 px-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-light file:text-dark-blue hover:file:bg-primary-light/90"
              />
            </label>

            {/* Title Input */}
            <label className="flex flex-col">
              <span className="text-white mb-2 font-medium">Add Title</span>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter the Blog Title"
                className="bg-white text-dark-blue rounded-md h-12 px-4"
              />
            </label>

            {/* Blog Editor */}
            <div className="rounded-md overflow-hidden">
              <ReactQuill
                className="w-full h-60 bg-white rounded-md"
                theme="snow"
                value={form.blogData}
                onChange={handleEditorChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-md bg-primary-light text-dark-blue text-xl font-semibold cursor-pointer hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Quill border remove */}
      <style jsx global>{`
        .ql-container.ql-snow {
          border: none !important;
        }
        .ql-toolbar.ql-snow {
          border: none !important;
          background: #f9fafb;
        }
      `}</style>
    </>
  );
};

export default CreateBlog;
