import Image from "next/future/image";
import logoImg from "../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import React, { useEffect } from "react";

import { Handbag } from "phosphor-react";
import Link from "next/link";
import { HeaderContainer } from "../styles/pages/app";
import axios from "axios";

export function Header() {
  const { setItemQuantity, cartDetails, handleCartClick } = useShoppingCart();

  const entries = [];
  for (const id in cartDetails) {
    const entry = cartDetails[id];

    const options = [];
    for (let quantity = 1; quantity <= 20; ++quantity)
      options.push(<option value={quantity}>{quantity}</option>);

    entries.push(
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <figure style={{ textAlign: "center" }}>
          <img
            style={{ height: 200, width: 250 }}
            src={entry.image}
            alt={entry.name}
          />
          <figcaption>{entry.name}</figcaption>
        </figure>
        <p>{entry.formattedValue}</p>

        <div>
          <label htmlFor="quantity-select" style={{ margin: "0 1rem 0 0" }}>
            Quantity:
          </label>
          <select
            id="quantity-select"
            defaultValue={entry.quantity}
            onChange={(event) => {
              setItemQuantity(id, parseInt(event.target.value, 10));
            }}
          >
            {options}
          </select>
        </div>
      </article>
    );
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
