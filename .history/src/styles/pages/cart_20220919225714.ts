import { styled } from "..";

export const CartContainer = styled("div", {
  position: "absolute",
  maxWidth: 480,
  width: "100%",
  height: "100%",
  zindex: '4',

  right: 0,

  backgroundColor: "$gray800",
});

export const CloseCartButton = styled("div", {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",

  button: {
    background: "transparent",
    width: 36,
    height: 36,
    border: 0,
    color: "$gray100",
  },
});

export const CartContent = styled("div", {
  margin: "3.5rem",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const CartDetails = styled("div", {
  bottom: "4rem",
  display: "flex",
  marginTop: "auto",
  marginBottom: "8rem",
  flexDirection: "column",

  justifyContent: "space-between",

  h1: {
    display: "flex",
    justifyContent: "space-between",
    color: "$gray300",
    fontSize: "1rem",
    span: {
      fontSize: "$md",
    },
  },

  p: {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
    color: "$gray100",
    fontSize: "$lg",
    fontWeight: "bold",

    span: {
      fontSize: "$xl",
    },
  },

  button: {
    marginTop: "3.5rem",
    width: "100%",
    bottom: "3rem",
    height: 69,

    border: 0,
    borderRadius: 8,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "$green500",
    color: "White",

    fontSize: "$md",
    fontWeight: "bold",
  },
});
