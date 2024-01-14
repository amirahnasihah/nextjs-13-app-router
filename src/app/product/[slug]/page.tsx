// Dynamic Route: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// url path: /product/[slug] ==> dynamic: [slug] became product/testingggg or slug can be whatever you write in url path (params)

type DetailProductPageProps = { params: { slug: string } };

export default function Page(props: DetailProductPageProps) {
  const { params } = props;
  console.log("params=>", params);
  return (
    <div>
      <h1>Detail product page: {params.slug}</h1>
    </div>
  );
}

/**
Route	Example:
app/blog/[slug]/page.js
app/blog/[slug]/page.js
app/blog/[slug]/page.js

URL:
/blog/a
/blog/b 
/blog/c

params:
{ slug: 'a' }
{ slug: 'b' }
{ slug: 'c' }
*/
