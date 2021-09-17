import { FC } from 'react'

const CustomCheckout: FC = () => {
  return (
    <>
      <iframe src={'/pacman/index.html'} style={{width:'100%', height:800}}/>
    </>
  )
}

export default CustomCheckout;
