import { HelloWorld } from "~/hello-world/hello-world";
import type { Route } from "./+types/hello-world";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router App!" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HelloWorldConfig() {
  return <HelloWorld />;
}
