async function fetchAPI(
  query: string,
  { variables } = {} as any,
  preview: boolean
) {
  const url = preview
    ? `${process.env.NEXT_PUBLIC_WEBINY_PREVIEW_API_URL}`
    : `${process.env.NEXT_PUBLIC_WEBINY_API_UR}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WEBINY_API_SECRET}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
        query PostSlugs {
          listPosts {
            data {
              slug
            }
          }
        }
      `,
    {},
    false
  );
  return data?.listPosts.data;
}
