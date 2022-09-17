import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("a", {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.9)",
  borderRadius: "8px",
  padding: '0.25rem',
  cursorPointer: 'pointer',
  position: 'relative',

  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center',

  img : {
    objectFit: 'cover'
  },

  footer : {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.1)'
  }
});
