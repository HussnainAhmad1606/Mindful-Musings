import { Suspense } from "react";
export const metadata = {
  title: "Payment Success - Mindful Musings",
  description: "This is website where I spit",
};

export default function RootLayout({ children }) {
  return (
    <Suspense>
    {children}
    </Suspense>
  );
}