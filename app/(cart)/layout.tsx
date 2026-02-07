import Header from "@/components/shared/Header";

function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        // suppressHydrationWarning
        className="bg-[#F4F1EE]"
      >
        <Header background="#F4F1EE" />
        {children}
      </body>
    </html>
  );
}

export default CartLayout;
