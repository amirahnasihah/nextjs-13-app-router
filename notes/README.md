- [6. Data Fetching](#6-data-fetching)
- [7. Caching \& Revalidating](#7-caching--revalidating)
  - [Caching Data](#caching-data)
    - [Opting out of Data Caching](#opting-out-of-data-caching)
    - [Individual fetch Requests](#individual-fetch-requests)
  - [Revalidating Data](#revalidating-data)
    - [Time-based Revalidation](#time-based-revalidation)
    - [On-demand Revalidation](#on-demand-revalidation)
- [8. Loading UI \& Error Handling](#8-loading-ui--error-handling)
  - [Loading UI](#loading-ui)
  - [Error Handling](#error-handling)
- [9. Middleware](#9-middleware)

# 6. Data Fetching

- kalau API dari api route sendiri, bila map data, kita tambah `data`
- kalau api dari luar, mungkin takda. tgk API structure

contoh:

```typescript
{products.data.length > 0 && products.data.map((product: any) => {
```

```typescript
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
```

# 7. Caching & Revalidating

> cache: https://developer.mozilla.org/en-US/docs/Web/API/Request/cache

## Caching Data

### Opting out of Data Caching

> `fetch` requests are not cached if: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching

`fetch` requests are not cached if:

- The `cache: 'no-store'` is added to `fetch` requests.
- The `revalidate: 0` option is added to individual `fetch` requests.
- The `fetch` request is inside a Router Handler that uses the `POST` method.
- The `fetch` request comes after the usage of `headers` or `cookies`.
- The `const dynamic = 'force-dynamic'` route segment option is used.
- The `fetchCache` route segment option is configured to skip cache by default.
- The `fetch` request uses `Authorization` or `Cookie` headers and there's an uncached request above it in the component tree.

### Individual fetch Requests

To opt out of caching for individual fetch requests, you can set the cache option in fetch to 'no-store'. This will fetch data dynamically, on every request.

## Revalidating Data

### Time-based Revalidation

> Time-based: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#time-based-revalidation

```typescript
// type CatchAllPageProps = { params: { slug: string[] } };
type ProductPageProps = { params: { slug: string[] } };

async function getData() {
  // API dari luar, tapi kalau amik API dari api route sendiri?
  // API dari /api/product/route.ts
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache", // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
    next: {
      revalidate: 30, // update setiap 30 saat. fungsi: utk performance (e.g. for analytics)
    },
  });

  console.log("response fakestore api:", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
```

### On-demand Revalidation

> on-demand: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation

- validate secara manual
- ada `tags: [""]`, contoh `["products"]`
- buat folder kat /api folder `revalidate` folder, then create `route.ts` file
- `import { revalidateTag } from 'next/cache's`
- open POSTMAN/Thunder Client: POST `http://localhost:3000/api/revalidate?tag=products`

= Response:

```log
{
  "revalidate": true,
  "now": 1706241480972
}
```

```typescript
// type CatchAllPageProps = { params: { slug: string[] } };
type ProductPageProps = { params: { slug: string[] } };

async function getData() {
  // API dari luar, tapi kalau amik API dari api route sendiri?
  // const res = await fetch("https://fakestoreapi.com/products");

  // API dari /api/product/route.ts
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache", // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
    next: {
      tags: ["products"],
    },
  });

  console.log("response fakestore api:", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
```

trycatch() method for error handlind

```typescript
async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      cache: "force-cache",
      next: {
        tags: ["products"],
      },
    });

    console.log("Response status:", res.status);

    if (!res.ok) {
      // console.error("Failed to fetch data:", res.statusText);
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();
    console.log("JSON Data:", jsonData);

    return jsonData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
```

# 8. Loading UI & Error Handling

## Loading UI

> Loading UI and Streaming: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming

- hanya masukkan `loading.tsx` kat folder tempat yg kita nak load.
- nextjs akan buatkan loadnya

```typescript
cache: "force-cache"; // takda Loading... sbb kita dah store data (cache)

cache: "no-store"; // ada Loading...
```

## Error Handling

> Error Handling https://nextjs.org/docs/app/building-your-application/routing/error-handling

- hanya buat file `error.tsx` sama dgn loading ui
- tambah 's' kat products url -> `await fetch("https://fakestoreapi.com/products`
- error jadi neat

# 9. Middleware

> https://nextjs.org/docs/app/building-your-application/routing/middleware

- Middleware runs before cached content and routes are matched

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // bila request/buka url cth '/about' kita terus redirect ke url '/'
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
```

- `redirect` the incoming request to a different URL
- `rewrite` the response by displaying a given URL

- cth; kalau nak buat lagi utk URL lain guna conditional statements kena duplicate lagi. ini jadi leceh sbb kena duplicate byk2 utk page yg lain2. utk atasi, guna konsep `matcher`.
- jadi kita buat satu aturan supaya nanti URL mana yg akan meng-execute middleware

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // bila request/buka url cth '/about' kita terus redirect ke url '/'
  // cth, kalau belum login akan di redirect ke '/login' page
  const isLogin = false;
  if (request.nextUrl.pathname.startsWith('/about')) {
     // belum login redirect ke login page
    if(!isLogin) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
```

### `matcher` concept

> matcher allows to filter Middleware to run on specific paths

- cth; kalau nak buat lagi utk URL lain guna conditional statements kena duplicate lagi. ini jadi leceh sbb kena duplicate byk2 utk page yg lain2. utk atasi, guna konsep `matcher`.
- jadi kita buat satu aturan supaya nanti URL mana yg akan meng-execute middleware

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const isLogin = false;
  if(!isLogin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ["/about/:path*"],
}
```