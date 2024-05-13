import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";
import BlogDetails from "../Components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";


  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mx-auto">
      <Header />
      <div>
        <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => navigation(-1)}>Back</button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2 className="font-bold text-2xl mt-5 mb-3">Related Blogs</h2>
            {relatedblog.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

