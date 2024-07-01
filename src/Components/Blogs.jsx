import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BloggDetails";

const Blogs = () => {
    //consume
    const {posts, loading} = useContext(AppContext);


    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mx-auto">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => (
              <BlogDetails key = {post.id} post = {post}/>
                ))
            )}
        </div>
    );
};

export default Blogs;
