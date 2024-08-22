import { Sidebar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to my Dashboard"
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="min-h-screen bg-gray-50/50">
        <Sidebar />
        <div className="p-4 xl:ml-80">
            {children}
        </div>
    </div>
  );
}
