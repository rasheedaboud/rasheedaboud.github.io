import { useEffect, useState } from "react";
import { Blog } from "../../types/Blog";
import { readBlogs } from "../../types/AzureStorage";

export const useTableStorage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = (await readBlogs()) ?? [];

      setBlogs(data);
    };
    loadData();
  }, []);

  return blogs;
};
