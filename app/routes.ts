import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("about", "./routes/about.tsx"),

  layout("./routes/auth/layout.tsx", [
    route("login", "./routes/auth/login.tsx"),
    route("register", "./routes/auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./routes/concerts/home.tsx"),
    route(":city", "./routes/concerts/city.tsx"),
    route("trending", "./routes/concerts/trending.tsx"),
    route("cart", "./routes/concerts/cart.tsx"),
  ]),
] satisfies RouteConfig;
