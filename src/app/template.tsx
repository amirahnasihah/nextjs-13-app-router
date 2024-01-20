/** 
- Templates: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates

- Templates: Templates are similar to layouts in that they wrap each child layout or page.

- templates create a new instance for each of their children on navigation.

- templates would be a more suitable option than layouts. For example:

Features that rely on `useEffect` (e.g logging page views) and `useState` (e.g a per-page feedback form).
To change the default framework behavior. For example, Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation.
*/
"use client";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);

  return (
    <div>
      {children}
      <h1>
        This is how a Template from NextJS:{" "}
        <button
          className=" bg-purple-900 text-white"
          onClick={() => setState(state + 1)}
        >
          click here → {state}
        </button>
      </h1>
    </div>
  );
}

// when go to different route, template will change
