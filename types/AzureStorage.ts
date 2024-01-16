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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function streamToString(stream: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chunks: any = [];
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stream.on("data", (chunk: any) => chunks.push(Buffer.from(chunk)));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stream.on("error", (err: any) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

async function getBlobServer(title: string) {
  const filename = `${title}.md`;
  const client = containerClient.getBlobClient(filename);
  const data = await client.download();

  const blob = await data.readableStreamBody;

  const text = (await streamToString(blob)) as string;

  return text ?? `no data found for fileName:${filename}`;
}

const containerClient = blobClient.getContainerClient("blogs");

async function getBlobClient(title: string) {
  const client = containerClient.getBlobClient(`${title}.md`);
  const data = await client.download();
  if (data) {
    const blob = await data.blobBody;
    return blob ? blob.text() ?? "" : "";
  }
}

async function getBlob({
  title,
  server,
}: {
  title: string | undefined;
  server: boolean;
}): Promise<string | undefined> {
  if (!title) throw Error("title is required");
  return server ? await getBlobServer(title) : await getBlobClient(title);
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
    return [];
  }
}
export async function readBlog(
  rowKey: string,
  server: boolean
): Promise<Blog | null> {
  try {
    const response = (await client.getEntity(
      "blogs",
      rowKey
    )) as unknown as Blog;

    if (response) {
      const markdown = await getBlob({ title: response.title, server: server });
      return markdown ? { ...response, markdown: markdown } : null;
    }
    throw Error(`no blob found with title:${rowKey}`);
  } catch (error) {
    console.log(error);
    return null;
  }
}
