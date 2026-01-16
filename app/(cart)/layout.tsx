function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body

      // suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

export default CartLayout;
