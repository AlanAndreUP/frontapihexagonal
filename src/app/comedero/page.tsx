import './comedero.css'
import InputText from '@/components/InputText/InputText'
import Button from '@/components/Button/Button'
import Comedero from '@/components/Comedero/Comedero'

export default function Login () {

    return (
        <section className="login">

            <form action="" >

                <Comedero />

                <InputText type='text' placeholder='nombre de usuario' /> 
                <InputText type='password' placeholder='contraseña' />
                <InputText type='text' placeholder='Id del kit' />

                <Button text='Agregar'/>

            </form>

        </section>
    )
} 