// Catch-all Segments: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments
// adding an ellipsis inside the brackets `[...folderName]`

// slug jadi string[] (string array)
type CatchAllProps = { params: { slug: string[] } };

export default function CatchAll(props: CatchAllProps) {
  const { params } = props;
  console.log(params);

  return (
    <div>
      <h1>CatchAll My Product {params.slug}</h1>
    </div>
  );
}

/**
// For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

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
