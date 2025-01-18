var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "stream";
import remixNode from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var { Response } = remixNode, ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot.default(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 41,
          columnNumber: 11
        },
        this
      ),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 83,
          columnNumber: 11
        },
        this
      ),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      children,
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV2(Layout, { children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    }
  ];
}

// app/routes/reservations.tsx
var reservations_exports = {};
__export(reservations_exports, {
  default: () => Reservations,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
async function loader() {
  return json({ availableTimes: [] });
}
function Reservations() {
  let { availableTimes } = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold mb-8", children: "Make a Reservation" }, void 0, !1, {
    fileName: "app/routes/reservations.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/reservations.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/db.server.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
var sqlite = new Database("restaurant.db"), db = drizzle(sqlite);
migrate(db, { migrationsFolder: "./migrations" });

// app/schema.ts
import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
var users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  phone: text("phone"),
  address: text("address")
}), menuCategories = sqliteTable("menu_categories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull()
}), menuItems = sqliteTable("menu_items", {
  id: integer("id").primaryKey(),
  categoryId: integer("category_id").references(() => menuCategories.id),
  name: text("name").notNull(),
  description: text("description"),
  price: real("price").notNull(),
  imageUrl: text("image_url")
}), orders = sqliteTable("orders", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  total: real("total").notNull(),
  status: text("status").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull()
}), orderItems = sqliteTable("order_items", {
  id: integer("id").primaryKey(),
  orderId: integer("order_id").references(() => orders.id),
  menuItemId: integer("menu_item_id").references(() => menuItems.id),
  quantity: integer("quantity").notNull(),
  price: real("price").notNull()
}), reservations = sqliteTable("reservations", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  date: text("date").notNull(),
  time: text("time").notNull(),
  guests: integer("guests").notNull(),
  status: text("status").notNull()
});

// app/routes/_index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader2() {
  let categories = await db.select().from(menuCategories).all(), items = await db.select().from(menuItems).all();
  return json2({ categories, items });
}
function Index() {
  let { categories, items } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV4("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-3xl font-bold mb-8", children: "Our Menu" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    categories.map((category) => /* @__PURE__ */ jsxDEV4("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV4("h2", { className: "text-2xl font-semibold mb-4", children: category.name }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: items.filter((item) => item.categoryId === category.id).map((item) => /* @__PURE__ */ jsxDEV4("div", { className: "border p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV4("h3", { className: "text-xl font-medium", children: item.name }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 26,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-600", children: item.description }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-lg font-semibold mt-2", children: [
          "$",
          item.price.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 28,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV4(
          "button",
          {
            className: "mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
            onClick: () => addToCart(item),
            children: "Add to Cart"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 29,
            columnNumber: 23
          },
          this
        )
      ] }, item.id, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this)
    ] }, category.id, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function loader3() {
  return json3({ orders: [], reservations: [] });
}
function Admin() {
  let { orders: orders2, reservations: reservations2 } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV5("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ jsxDEV5("h1", { className: "text-3xl font-bold mb-8", children: "Admin Dashboard" }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/routes/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Cart,
  loader: () => loader4
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader4() {
  return json4({ items: [] });
}
function Cart() {
  let { items } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV6("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl font-bold mb-8", children: "Your Cart" }, void 0, !1, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6S2CEYYR.js", imports: ["/build/_shared/chunk-4ZNTBH4S.js", "/build/_shared/chunk-4KDSEWEU.js", "/build/_shared/chunk-7SRK3KT3.js", "/build/_shared/chunk-OPGM6WIO.js", "/build/_shared/chunk-WWEL7QKW.js", "/build/_shared/chunk-2AFRYLX2.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2XZHCSCK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WI7TU3RF.js", imports: ["/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-ETGUBDXH.js", imports: ["/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-HJZ3UJKC.js", imports: ["/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/reservations": { id: "routes/reservations", parentId: "root", path: "reservations", index: void 0, caseSensitive: void 0, module: "/build/routes/reservations-CIICQCSI.js", imports: ["/build/_shared/chunk-TMJLOEVS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "361c25f4", hmr: { runtime: "/build/_shared/chunk-7SRK3KT3.js", timestamp: 1737208707448 }, url: "/build/manifest-361C25F4.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/reservations": {
    id: "routes/reservations",
    parentId: "root",
    path: "reservations",
    index: void 0,
    caseSensitive: void 0,
    module: reservations_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
