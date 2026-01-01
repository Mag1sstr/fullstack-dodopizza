function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={` antialiased flex flex-col`}
        // suppressHydrationWarning
      >
        <main className="flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}

export default CartLayout;
