import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("div", {
  padding: "1.2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  //alignItems: "center",
  justifyContent: "space-between",

  svg: {
    padding: "12px",
    gap: "12px",

    width: "48px",
    height: "48px",

    background: "#202024",
    borderRadius: "6px",
  },
});