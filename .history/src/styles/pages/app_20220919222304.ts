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
  },

  span: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "8px",

    position: "absolute",
    width: "24px",
    height: "24px",
    right: "70px",
    top: "10px",

    background: "#00875F",

    borderRadius: "1000px",

    flex: "none",
    order: 1,
    flexGrow: 0,
    zIndex: 1,
  },
});
