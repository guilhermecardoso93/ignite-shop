import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const HeaderContainer = styled("div", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    width: 48,
    height: 48,
    border: 0,
    borderRadius: 8,
    backgroundColor: "$gray800",
    color: "$gray300",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px",
    gap: "12px",
  },
});

export const CartCount = styled("span", {
  background: "#00875F",
  border: "2px solid #121214",
  borderRadius: "1000px",
  width: "24px",
  height: "24px",
  flex: "none",
  order: 1,
  flexGrow: 0,

  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  position: "absolute",
  left: '1250px',
  top: '20px'
});
