"use client";
import { HeroUIProvider } from "@heroui/react";

export default function ProviderHero({ children }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
