import './InputText.css'

type inputArgs = {
    placeholder: string,
    type: string
}

export default function InputText({placeholder, type}: Readonly<inputArgs>) {

    return (
        <input type={type} placeholder={placeholder} className='inputText'/>
    )
}