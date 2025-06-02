export const metadata = {
  title: 'Shopping List',
  description: 'A simple shopping list app using React and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
