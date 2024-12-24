"use client";
import { useAppSelector } from "@/lib/hooks";
import { add } from "@/lib/store/featrues/cart/cartSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [cartItem, setCartItem] = useState("")
  const dispatch = useDispatch()
  const carttt = useAppSelector(state => state.cart.items);

  return (
    <>
      <ul className="flex gap-20">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/fetchdata"}>
          <li>Docs</li>
        </Link>
        <input type="text" value={cartItem} onChange={(e) => setCartItem(e.target.value)} className="border-2"/>
        <button
          aria-label="add Item"
          className="border p-2"
          onClick={() => dispatch(add(cartItem))}
        >
          add
        </button>
      </ul>
      <div className="text-red-400 ">Navbar {carttt.map((el, index) => (<p key={index}>{el}</p>))}</div>
    </>
  );
};

export default Navbar;
