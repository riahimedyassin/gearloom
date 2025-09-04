import { ThemeProvider } from "@/components/theme-provider";
import { ProjectProvider } from "@/contexts/project-context";
import { TaskProvider } from "@/contexts/task-context";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { ToastProvider } from "@/providers/toast-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azurite",
  description: "Azurite | Ultimate Task Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <ThemeProvider>
            <ProjectProvider>
              <TaskProvider>
                {children}
                <ToastProvider />
              </TaskProvider>
            </ProjectProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
