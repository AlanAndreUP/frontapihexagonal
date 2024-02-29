import meEncanta from '../../../public/me encanta.svg'
import meDivierte from '../../../public/me divierte.svg'
import Image from 'next/image'
import './Reactions.css'

export default function Reactions (){

    return (
        <div className='reactionsContainer'>
            <button>
                <Image src={meDivierte} alt='me divierte' className='reaction'/>
            </button>
            <button>
                <Image src={meEncanta} alt='me encanta' className='reaction'/>
            </button>

        </div>
    )
}