import Image from "next/future/image";
import logoImg from "../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import React, { useEffect } from "react";

import { Handbag } from "phosphor-react";
import Link from "next/link";
import { useState } from "react";
import { HeaderContainer } from "../styles/pages/app";
import axios from "axios";

export function Header() {
  const { setItemQuantity, cartDetails, handleCartClick, clearCart } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  

  async function handleCheckout() {
    try {
      const lineItems = Object.values(cartDetails ?? {}).map((entry) => {
        return {
          price: entry.price_id,
          quantity: entry.quantity,
        };
      });
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        line_items: lineItems,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
      clearCart();
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <>
      <HeaderContainer>
        <Link href={"/"}>
          <Image src={logoImg} alt="" />
        </Link>
        <button onClick={handleCartClick}>
          <Handbag size={24} weight="bold" />
          <span></span>
        </button>
      </HeaderContainer>
    </>
  );
}
