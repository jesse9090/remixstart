import {
      Links,
      Meta,
      Outlet,
      Scripts,
      ScrollRestoration,
    } from "@remix-run/react";

    export function Layout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
          </head>
          <body>
            {children}
            <ScrollRestoration />
            <Scripts />
          </body>
        </html>
      );
    }

    export default function App() {
      return (
        <Layout>
          <Outlet />
        </Layout>
      );
    }

    export function links() {
      return [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
        },
      ];
    }
