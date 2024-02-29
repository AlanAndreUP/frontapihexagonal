import './login.css'
import InputText from '@/components/InputText/InputText'
import Button from '@/components/Button/Button'
import Logo from '@/components/Logo/Logo'

export default function Login () {

    return (
        <section className="login">

            <form action="" >

                <Logo />

                <InputText type='text' placeholder='nombre de usuario' /> 
                <InputText type='password' placeholder='contraseña' />

                <Button text='entrar'/>

            </form>

        </section>
    )
} 