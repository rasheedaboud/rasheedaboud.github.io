import React from "react";
import { useMediaQuery } from "react-responsive";
import { Blog } from "../../types/Blog";
import { Tag } from "./Tag";

function canonicalize(input: string): string {
  if (!input) return "";
  return input.toLowerCase().replace(/\s/g, "-");
}

export const BlogCard = ({
  blog,
  handleTagClick,
}: {
  blog: Blog;
  handleTagClick: (tag: string) => void;
}) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  return (
    <div>
      {" "}
      <div>
        <div className=' sm:hidden card grid-rows-3 grid-flow-col bg-base-100 shadow-xl my-5'>
          <div className='flex justify-center items-center'>
            {" "}
            <figure className='max-w-xs px-3 py-2 min-w-xs '>
              {isSmallScreen ? (
                <img
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                  src={blog.thumbnail}
                  alt='Movie'
                />
              ) : (
                <img
                  style={{ maxWidth: "500px", maxHeight: "600px" }}
                  src={blog.thumbnail}
                  alt='Movie'
                />
              )}
            </figure>
          </div>

          <div className='block px-5 py-5'>
            {blog.tags.split(",").map((tag) => (
              <Tag handleTagClick={handleTagClick} tag={tag} key={tag} />
            ))}
          </div>
          <div className='grid grid-rows-3 grid-flow-col px-5 py-1'>
            <div className='avatar placeholder row-span-3'>
              <div className='bg-neutral text-neutral-content rounded-full w-24'>
                <span className='text-3xl'>RA</span>
              </div>
            </div>
            <div className='font-bold uppercase'>{blog.author}</div>
            <div className='uppercase'>{blog.readTime} read</div>
            <div className='uppercase'>{blog.date}</div>
          </div>
          <div className='card-body  max-w-sm'>
            <h2 className='card-title'>{blog.title}</h2>
            <p className=''>{blog.description}</p>
            <div className='card-actions justify-end'>
              <a
                href={`/blog/${canonicalize(blog.title)}`}
                className='btn btn-primary'
              >
                Read more -&gt;
              </a>
            </div>
          </div>
        </div>
        <div className='hidden sm:flex card card-side bg-base-100  shadow-xl my-5'>
          <figure className='max-w-xs px-3 py-2 min-w-xs'>
            <img
              style={{ maxWidth: "500px", maxHeight: "600px" }}
              src={blog.thumbnail}
              alt='Movie'
            />
          </figure>
          <div className='card-body '>
            <h2 className='card-title'>{blog.title}</h2>

            <div className='grid grid-rows-3 grid-flow-col px-5 py-1'>
              <div className='avatar w-16 h-16 placeholder row-span-3'>
                <div className='bg-neutral text-neutral-content rounded-full w-24'>
                  <span className='text-3xl'>RA</span>
                </div>
              </div>
              <div className='font-bold uppercase'>{blog.author}</div>
              <div className='uppercase'>{blog.readTime} read</div>
              <div className='uppercase'>{blog.date}</div>
            </div>
            <div className='block'>
              {blog.tags.split(",").map((tag) => (
                <Tag handleTagClick={handleTagClick} tag={tag} key={tag} />
              ))}
            </div>
            <p className=''>{blog.description}</p>
            <div className='card-actions justify-end'>
              <a
                href={`/blog/${canonicalize(blog.title)}`}
                className='btn btn-primary'
              >
                Read more -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
