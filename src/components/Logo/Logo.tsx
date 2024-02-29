import Image from "next/image";
import logo from '../../../public/logo.svg'
import './Logo.css'


export default function Logo({width}: Readonly<{width?: string}>) {        

    return <Image src={logo} alt="logo" className="logo" style={{width: width}} />
}