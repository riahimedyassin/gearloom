import { ThemeProvider } from "@/components/theme-provider";
import { ProjectProvider } from "@/contexts/project-context";
import { TaskProvider } from "@/contexts/task-context";
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
        <ThemeProvider>
          <ProjectProvider>
            <TaskProvider>
              {children}
            </TaskProvider>
          </ProjectProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
