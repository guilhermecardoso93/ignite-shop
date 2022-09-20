import Image from "next/future/image";
import logoImg from "../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import { Handbag } from "phosphor-react";
import Link from "next/link";
import { HeaderContainer } from "../styles/pages/app";

export function Header() {
  const { loadCart, handleCartClick } = useShoppingCart();

  return (
    <>
      <HeaderContainer>
        <Link href={"/"}>
          <Image src={logoImg} alt="" />
        </Link>
        <button onClick={handleCartClick}>
          <Handbag size={24} weight="bold" />
        </button>
      </HeaderContainer>
    </>
  );
}
