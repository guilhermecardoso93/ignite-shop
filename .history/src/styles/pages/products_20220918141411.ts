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
  height:'calc(656px - 0.5rem)',
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  image :{
    objectFit: "cover"
  }
});

export const ProductDetails = styled("div", {});
