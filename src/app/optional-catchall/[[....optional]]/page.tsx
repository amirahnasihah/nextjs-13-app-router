/**
- Optional Catch-all Segments: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments

- Catch-all Segments can be made optional by including the parameter in double square brackets: `[[...folderName]]`

- For example, `app/shop/[[...slug]]/page.js` will also match `/shop`, in addition to `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.

- The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched (`/shop` in the example above).

- so, thats why you can delete and no page.tsx in /optional-catchall folder
*/

type OptionalCatchAllProps = { params: { optional: string[] } };

export default function OptionalCatchAll(props: OptionalCatchAllProps) {
  const { params } = props;
  console.log("OptionalCatchAll", params);

  return (
    <div>
      <h1>Optional Catch All Segments:</h1>
      {params.optional && (
        <>
          <p>Category: {params.optional[0]}</p>
          <p>Type: {params.optional[1]}</p>
          <p>Name: {params.optional[2]}</p>
        </>
      )}

      <code>
        {params.optional ? "Detail Optional Catch All Segment" : "Product Page"}
      </code>
    </div>
  );
}

/**
For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

Route	Example:
app/shop/[[...slug]]/page.js
app/shop/[[...slug]]/page.js
app/shop/[[...slug]]/page.js
app/shop/[[...slug]]/page.js

URL:
/shop
/shop/a
/shop/a/b
/shop/a/b/c

params:
{}
{ slug: ['a'] }
{ slug: ['a', 'b'] }
{ slug: ['a', 'b', 'c'] }
*/
