"use client";
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface AuthModalProps {}

const AuthModal: FunctionComponent<AuthModalProps> = () => {
  const [value, setValue] = useState(["", "", "", ""]);
  const [currTab, setCurrTab] = useState(0);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const refs = [ref1, ref2, ref3, ref4];
  useEffect(() => {
    refs[currTab].current?.focus();
  }, [currTab]);

  return (
    <div className="fixed inset-0 bg-(--modal-bg) flex items-center justify-center z-50">
      <div className="w-[450px] p-[40px_45px_47px_45px] bg-white rounded-3xl">
        <div className="flex gap-7.5 mb-7.5">
          <div>
            <h1>Введите код</h1>
            <p>
              SMS-код был отправлен на номер телефона {"+7 (921) 450-20-25"}
            </p>
          </div>
          <img src="/code.png" alt="icon" className="w-[60px] h-[60px]" />
        </div>
        <div className="flex justify-center">
          <ul className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <li
                key={i}
                className="w-13.75 py-3.5 px-5 border border-[#E8E8E8] rounded-xl flex items-center justify-center"
              >
                <input
                  ref={refs[i]}
                  value={value[i]}
                  maxLength={1}
                  onClick={() => setCurrTab(i)}
                  onPaste={(e) => {
                    const text = e.clipboardData.getData("text");
                    setValue(text.split("").slice(0, 4));
                    refs[i].current?.blur();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                      if (!value[i].length) {
                        setValue((prev) =>
                          prev.map((el, index) =>
                            index === currTab - 1 ? "" : el
                          )
                        );
                        setCurrTab(currTab > 0 ? currTab - 1 : 0);
                      } else {
                        setCurrTab(i);
                      }
                    }
                  }}
                  onChange={(e) => {
                    setValue((prev) =>
                      prev.map((el, index) =>
                        index === i ? e.target.value : el
                      )
                    );
                    setCurrTab(currTab < 3 ? currTab + 1 : currTab);
                  }}
                  type="text"
                  className="w-full text-[1.5rem]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
