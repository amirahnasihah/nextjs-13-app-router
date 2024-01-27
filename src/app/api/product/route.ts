/**
Part 1 - Nested Route Handlers: Route Handlers can be nested inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.

- go url: http://localhost:3000/api/product

- NextRequest: selalu tambah parameter /product?id=1

*/

const data = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7514ef15-e369-4f2c-a945-99334c59edcd/dunk-low-retro-shoes-69h36X.png",
    rating: { rate: 1.9, count: 146 },
  },
  {
    id: 2,
    title: "Product 2",
    price: 49.99,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_425,c_limit/4128c7df-5fa0-4f7d-84e0-0a7337ebcc07/air-max-ishod-shoes-pJPHs6.png",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 3,
    title: "Product 3",
    price: 439.99,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-shoe-NMmm1B.png",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 4,
    title: "Product 4",
    price: 439.99,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-shoe-NMmm1B.png",
    rating: { rate: 4.5, count: 146 },
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
