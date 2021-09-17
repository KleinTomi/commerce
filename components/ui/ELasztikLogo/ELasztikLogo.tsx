import Image from 'next/image'
import logoPic from '../../../public/logo.png'

const Logo = ({ className = '', ...props }) => (
    <>
        <Image src={logoPic} alt="E-Lasztik" />
    </>
  )
  
  export default Logo
  