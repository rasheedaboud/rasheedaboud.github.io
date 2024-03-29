export type Blog = {
  partitionKey: string;
  rowKey: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  tags: string;
  markdown: string;
  thumbnail: string;
};
export const blogTableName = "blogs";
