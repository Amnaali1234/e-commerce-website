export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-17";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = assertValue(
  "skOYl6XoRTJPfCPLmDKpsodwUJZVEz2nxN1UmDgXCpFiVK21dJxHgkLuAO7N4oiCQ85dN6t3eu2IB6OMuyostersYvQ30CK92rxZXkG3yirsVxdAIBby59dGVHqUtJ1BLtSc5KWRZn4P8unZQIZF3IzuNLD4Wf4ONTl3xJhCMBJDtJCDiPse",
  "Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
