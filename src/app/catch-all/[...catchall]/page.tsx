/**
Part 1 - Catch-all Segments: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments

- Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets `[...folderName]`

- slug jadi string[] (string array)

- kalau folder name [...slug], props name `{ slug: string[] }` pun kena sama [...slug], cth [...catchall]


Part 2 - Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
*/

// type CatchAllPageProps = { params: { slug: string[] } };
type CatchAllPageProps = { params: { catchall: string[] } };

export default async function CatchAllPage(props: CatchAllPageProps) {
  const { params } = props;
  console.log(params);

  return (
    <div>
      <h1>Catch all My Product segments</h1>
      <h2>{params.catchall}</h2>
      <br />
      <p>Category: {params.catchall[0]}</p>
      <p>Type: {params.catchall[1]}</p>
      <p>Name: {params.catchall[2]}</p>
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
