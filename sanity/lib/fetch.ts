import { createClient } from "next-sanity";

const client = createClient({
  projectId: "nkni4f5x",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
  token:
    "skOYl6XoRTJPfCPLmDKpsodwUJZVEz2nxN1UmDgXCpFiVK21dJxHgkLuAO7N4oiCQ85dN6t3eu2IB6OMuyostersYvQ30CK92rxZXkG3yirsVxdAIBby59dGVHqUtJ1BLtSc5KWRZn4P8unZQIZF3IzuNLD4Wf4ONTl3xJhCMBJDtJCDiPse",
});

export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: any;
}) {
  return await client.fetch(query, params);
}
