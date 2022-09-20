import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  
  h1: {
    marginTop: '6.5rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    fontSize: '$lg',

    marginTop: '5rem',
    color: '$green500',

    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300'
    }
  }
})
export const ImageList = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'row',
  
  
})
export const ImageContainer = styled('div', {
  marginLeft: '-2rem',
  width: '100%',
  maxWidth: 140,
  height: 120,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465da 100%)',
  borderRadius: '50%',
  boxShadow: '-1px 0 20px #202024',
  
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})