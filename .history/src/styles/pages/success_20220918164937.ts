import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$xxl",
    color: "$gray100",
    marginTop: "2rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    maxWidth: 560,
    marginTop: "2rem",
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "$lg",
    color: "$green300",
    textDecoration: 'none',
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 150,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
