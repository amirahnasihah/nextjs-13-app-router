/**
- Nested Route Handlers: Route Handlers can be nested inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.

- go url: http://localhost:3000/api/product

- NextRequest: selalu tambah parameter /product?id=1
*/

const data = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
  },
];

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // console.log(request);
  const { searchParams } = new URL(request.url); // searchparams dari request.url yg mana request yg ini `?id=1`
  const id = searchParams.get("id");
  // console.log(id);

  // kalau ada id, kita return hanya data yg kita nak based on id -> ?id=1
  if (id) {
    const findById = data.find((item) => item.id === Number(id));

    if (findById) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: findById,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  // kalau takda id, kita return semua data
  return NextResponse.json({ status: 200, message: "success", data: data });
}
