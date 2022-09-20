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

  display: 'flex',
  alignItems: "center",
  justifyContent: "space-between",

});

export const ButtonShopCart = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "12px",
  gap: "12px",
  isolation: "isolate",

  position: "absolute",
  width: "48px",
  height: "48px",
  right: "136px",
  top: "42px",

  /* Grayscale/Elements */

  background: "#202024",
  borderRadius: "6px",
});
