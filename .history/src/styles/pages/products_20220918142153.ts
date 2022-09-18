import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  margin: "0 auto",
  maxWidth: 1180,
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: "calc(656px - 0.5rem)",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  image: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },
  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    backgroundColor: "$green500",
    color: "$white",
    borderRadius: "8px",
    border: 0,
    marginTop: "auto",
    cursorPointer: "pointer",
    padding: "1.25rem",
    fontWeight: "bold",
  },
});
