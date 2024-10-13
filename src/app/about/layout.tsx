import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About - Mindful Musings",
  description: "Enjoy ad-free reading and dive deeper into the world of writing with our all-in-one monthly package.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}