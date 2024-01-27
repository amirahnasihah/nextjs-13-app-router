/**
Part 1 - Catch-all Segments: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments

- Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets `[...folderName]`

- slug jadi string[] (string array)

- kalau folder name [...slug], props name `{ slug: string[] }` pun kena sama [...slug], cth [...catchall]


Part 2 - Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

- API dari luar, tapi kalau amik API dari api route sendiri, /api/product/route.ts?
- dari api route sendiri, caranya beza. tgk konsep revalidate & cache (tambah cache: "no-store")

- Opt out of data fetching: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching
*/

import { StarRating } from "@/components/StarRating";
import Link from "next/link";

// type CatchAllPageProps = { params: { slug: string[] } };
type ProductPageProps = { params: { slug: string[] } };

async function getData() {
  // API dari luar, tapi kalau amik API dari api route sendiri?
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  // API dari /api/product/route.ts
  // const res = await fetch("http://localhost:3000/api/product", {
  //   cache: "force-cache", // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
  //   next: {
  //     // revalidate: 30, // update setiap 30 saat. fungsi: utk performance (e.g. for analytics)
  //     tags: ["products"],
  //   },
  // });

  // console.log("response fakestore api:", res);

  if (!res.ok) {
    console.error("Failed to fetch data:", res.statusText);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  // console.log(params);

  const products = await getData();
  // console.log("products:", products);

  return (
    <div>
      <h1>All My Product</h1>
      <h2>{params.slug ? "Detail Product Page" : "Product Page"}</h2>
      <hr />
      {/* List from API */}
      <div className="grid grid-cols-3 mt-5 place-items-center">
        {products.length > 0 &&
          products.map((product: any) => {
            const { id, title, price, description, image, rating } = product;

            // CARD
            return (
              <div
                key={id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 place-items-center"
              >
                <Link href="#">
                  <img
                    className="p-8 rounded-t-lg object-cover h-96 w-full"
                    src={image}
                    alt={title}
                    //   width={200}
                    //   height={200}
                  />
                </Link>
                <div className="px-5 pb-5">
                  <Link href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                      {title}
                    </h5>
                  </Link>
                  <div className="flex items-center mt-2.5 mb-5">
                    {/* STAR RATING COMPONENT */}
                    <StarRating rate={rating.rate} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {rating.rate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      RM {price}
                    </span>
                    <Link
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <br />
      {params.slug && (
        <>
          <p>Category: {params.slug[0]}</p>
          <p>Type: {params.slug[1]}</p>
          <p>Item: {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}

/**
For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

Route	Example:
app/shop/[...slug]/page.js
app/shop/[...slug]/page.js
app/shop/[...slug]/page.js

URL:
/shop/a
/shop/a/b
/shop/a/b/c

params:
{ slug: ['a'] }
{ slug: ['a', 'b'] }
{ slug: ['a', 'b', 'c'] }
*/
