"use client";
import { Spinner } from "@heroui/react";
export default function Loader() {
  return (
    <Spinner
      classNames={{ label: "text-foreground mt-2 " }}
      size="lg"
      variant="spinner"
      label="Loading....."
    />
  );
}
