import { styled } from "..";

export const CartEntryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start'
})

export const CartEntryImage = styled('div', {
  width: 95,
  height: 95,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465da 100%)',
  img: {
    objectFit: 'cover'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,

})

export const CartEntryDetails = styled('div', {
  height: '100%',
  marginLeft: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',

  h1: {
    fontSize: '$md',
    color: '$gray300'
  },

  span: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 'bold',
  },

  button: {
    background: 'transparent',
    color: '$green500',
    fontWeight: 'bold',
    border: 0
  }
  
})