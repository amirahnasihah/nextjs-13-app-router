export async function GET(
    req: Request,
    { params }: { params: { user: string } },
  ) {
    // we will use params to access the data passed to the dynamic route
    const user = params.user;
    return new Response(`Welcome to my Next application, user: ${user}`);
  }
  
  // dynamic route [user]
  // To access the API, open up http://localhost:3000/api/dynamic/[your_username]
  