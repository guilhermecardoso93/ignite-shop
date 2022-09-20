import Image from "next/future/image";
import logoImg from "../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import React from "react";

import { Handbag } from "phosphor-react";
import Link from "next/link";
import { CartCount, HeaderContainer } from "../styles/pages/app";

export function Header() {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <>
      <HeaderContainer>
        <Link href={"/"}>
          <Image src={logoImg} alt="" />
        </Link>
        <button onClick={handleCartClick}>
          <Handbag size={24} weight="bold" />
          {cartCount > 1 ? <CartCount>{cartCount}</CartCount> : ""}
        </button>
      </HeaderContainer>
    </>
  );
}
