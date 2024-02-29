import Image from 'next/image'
import paws from '../../../public/paws.svg'
import './Button.css'

export default function Button ({text}: Readonly<{text: string}>) {

    return <button className='button'>
            <Image src={paws} alt='paws' className='paws'/>
            {text}
        </button>
}