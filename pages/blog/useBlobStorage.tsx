import { useEffect, useState } from "react";
import { navigate } from "vike/client/router";
import { readBlog } from "../../types/AzureStorage";
import { Blog } from "../../types/Blog";

export const useBlobStorage = ({ title }: { title: string | undefined }) => {
  const [blog, setBlogs] = useState<Blog | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (title) {
        const data = await readBlog(title);
        // if (!data) {
        //   navigate("/blogs");
        // }
        setBlogs(data);
      } else {
        navigate("/blogs");
      }
    };
    loadData();
  }, []);

  return blog;
};
