import Image from "next/future/image";
import { CartActions, CartEntry as ICartEntry } from "use-shopping-cart/core";
import {
  CartEntryContainer,
  CartEntryDetails,
  CartEntryImage,
} from "../styles/pages/cartEntry";

export function CartEntry({
  entry,
  removeItem,
}: {
  entry: ICartEntry;
  removeItem: CartActions["removeItem"];
}) {
  return (
    <CartEntryContainer>
      <CartEntryImage>
        <Image src={entry.image} width={84} height={84} alt={entry.name} />
      </CartEntryImage>
      <CartEntryDetails>
        <h1>{entry.name}</h1>
        <span>{entry.formattedValue}</span>
        <button onClick={() => removeItem(entry.id)}>Remover</button>
      </CartEntryDetails>
    </CartEntryContainer>
  );
}
