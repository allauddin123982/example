"use client";
import { useAppSelector } from "@/lib/hooks";
import { useSelector } from "react-redux";

const Footer = () => {
  const carttt = useAppSelector((state) => state.cart.items);
  return (
    <div className="text-red-400 mt-20 absolute bottom-0">
      Footer
      {carttt.map((el, index) => (
        <p key={index}>{el}</p>
      ))}
    </div>
  );
};

export default Footer;
