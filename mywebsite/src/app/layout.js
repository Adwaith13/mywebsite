export const metadata = {
  title: "Adwaith Nair",
  description: "This website is created using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
