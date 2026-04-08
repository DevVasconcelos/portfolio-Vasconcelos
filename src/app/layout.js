import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider, THEME_STORAGE_KEY } from "@/components/ThemeProvider";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

const themeInitScript = `
  (() => {
    try {
      const storedTheme = window.localStorage.getItem('${THEME_STORAGE_KEY}');
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : preferredTheme;
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = 'dark';
    }
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ralewaySans.variable} antialiased bg-(--background) text-(--foreground)`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
