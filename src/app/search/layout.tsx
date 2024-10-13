import type { Metadata } from "next";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Search - Mindful Musings",
  description: "Enjoy ad-free reading and dive deeper into the world of writing with our all-in-one monthly package.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
        {children}
    </Suspense>
  );
}