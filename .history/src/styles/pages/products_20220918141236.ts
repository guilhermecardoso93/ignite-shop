import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  margin: "0 auto",
  maxWidth: "1180",
});

export const ImageContainer = styled("div", {
  width: '100%',
  maxWidth: 576,
  //height:,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

});

export const ProductDetails = styled("div", {});
