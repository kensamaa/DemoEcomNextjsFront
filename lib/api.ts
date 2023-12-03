"use server";
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
export async function getData() {
  console.log("test");
  const res = await fetch(
    "https://ecomtest-68c29f.ingress-haven.ewp.live/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      body: JSON.stringify({
        query: `
      query Getproducts {
        products {
          nodes {
            name
            id
            menuOrder
            image{
              sourceUrl
            }
          }
        }
      }
          `,
      }),
    }
  );
  const json = await res.json();

  return json.data.products;
}
