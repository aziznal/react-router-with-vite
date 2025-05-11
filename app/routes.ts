import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("hello-world", "./routes/hello-world.tsx"),
  route("goodbye-world", "./routes/goodbye-world.tsx"),
] satisfies RouteConfig;
