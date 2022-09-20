import Image from "next/future/image";
import logoImg from "../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import React, { useEffect } from "react";

import { Handbag } from "phosphor-react";
import Link from "next/link";
import { useState } from "react";
import { HeaderContainer } from "../styles/pages/app";
import axios from "axios";
import { CartEntry } from "./CartEntry";

export function Header() {
  const {
    setItemQuantity,
    cartDetails,
    handleCartClick,
    clearCart,
    cartCount,
  } = useShoppingCart();
  const [cartLength, setCartLength] = useState("");

  const lineItems = Object.values(cartDetails ?? {}).map((entry) => {
    return {
      price: entry.price_id,
      quantity: entry.quantity,
    };
  });

 

  return (
    <>
      <HeaderContainer>
        <Link href={"/"}>
          <Image src={logoImg} alt="" />
        </Link>
        <button onClick={handleCartClick}>
          <Handbag size={24} weight="bold" />
          <span>{cartDetails.}</span>
        </button>
      </HeaderContainer>
    </>
  );
}
