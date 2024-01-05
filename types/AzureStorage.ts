import { AzureSASCredential, TableClient } from "@azure/data-tables";
import { AnonymousCredential, BlobServiceClient } from "@azure/storage-blob";
import { Blog, blogTableName } from "./Blog";

const account = "rasheedaboudblogstorage";
const sas =
  "?sv=2022-11-02&ss=bfqt&srt=sco&sp=rlpx&se=2050-01-05T06:51:41Z&st=2024-01-04T22:51:41Z&spr=https,http&sig=SjF1MKOP6rLI16jsjbNTTFUVTuOP3lYMtJWLUZdscsI%3D";

const blobCredential = new AnonymousCredential();

const blobClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net${sas}`,
  blobCredential
);
const containerClient = blobClient.getContainerClient("blogs");

async function getBlob(title: string) {
  const client = containerClient.getBlobClient(`${title}.md`);
  const data = await client.download();
  if (data) {
    const blob = await data.blobBody;
    return blob ? blob.text() ?? "" : "";
  }
}

const credential = new AzureSASCredential(sas);

const client = new TableClient(
  `https://${account}.table.core.windows.net`,
  blogTableName,
  credential
);

export async function readBlogs() {
  try {
    const entitiesIter = client.listEntities();
    const result = [];
    for await (const entity of entitiesIter) {
      const blog = entity as unknown as Blog;
      if (blog) {
        result.push(blog);
      }
    }
    return result as Blog[];
  } catch (error) {
    console.log(error);
  }
}
export async function readBlog(rowKey: string): Promise<Blog | null> {
  try {
    const response = (await client.getEntity(
      "blogs",
      rowKey
    )) as unknown as Blog;

    if (response) {
      const markdown = await getBlob(response.title);
      return markdown ? { ...response, markdown: markdown } : null;
    }
    throw Error(`no blob found with title:${rowKey}`);
  } catch (error) {
    console.log(error);
    return null;
  }
}
