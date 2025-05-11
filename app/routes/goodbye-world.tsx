import { GoodbyeWorld } from "~/goodbye-world/goodbye-world";
import type { Route } from "./+types/goodbye-world";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Goodbye World" }];
}

export default function Config() {
  return <GoodbyeWorld />;
}
