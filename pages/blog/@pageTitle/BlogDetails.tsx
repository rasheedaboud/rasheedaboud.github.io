import { Blog } from "../../../types/Blog";
import { Tag } from "../../blogs/Tag";

export const BlogDetails = (blog: Blog) => {
  return (
    <div className='grid-rows-3 grid-flow-col'>
      <div className='flex justify-center items-center'>
        {" "}
        <figure className='max-w-xs px-3 py-2 min-w-xs '>
          <img
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            src={blog.thumbnail}
            alt='Movie'
          />
        </figure>
      </div>

      <div className='grid grid-rows-4 grid-flow-col gap-0 align-middle items-center sm:px-10'>
        <div className='avatar placeholder row-span-4 mx-auto'>
          <div className='bg-neutral text-neutral-content rounded-full w-24'>
            <span className='text-3xl'>RA</span>
          </div>
        </div>
        <div className='font-bold uppercase mx-5 sm:mx-0'>{blog.author}</div>
        <div className='uppercase mx-5 lg:mx-0'>{blog.readTime} read</div>
        <div className='uppercase mx-5 lg:mx-0'>{blog.date}</div>
        <div className='hidden md:block mx-5 lg:mx-0'>
          {blog.tags.split(",").map((tag) => (
            <Tag tag={tag} key={tag} handleTagClick={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};
