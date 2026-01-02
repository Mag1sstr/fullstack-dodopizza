import { createContext, ReactNode, useState } from "react";

type setModal = (b: boolean | ((prev: boolean) => boolean)) => void;

interface IModalsContext {
  openProductModal: boolean;
  setOpenProductModal: setModal;
  openCart: boolean;
  setOpenCart: setModal;
}
export const ModalsContext = createContext({} as IModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <ModalsContext.Provider
      value={{ openCart, setOpenCart, openProductModal, setOpenProductModal }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
