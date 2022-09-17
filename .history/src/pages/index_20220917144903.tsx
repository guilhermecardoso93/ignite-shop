import { styled } from '../styles';

const Button = styled('button', {
  color: '$gray100',
})

export default function Home() {
  return (
   <>
    <Button>Hello World</Button>
   </>
  )
}
