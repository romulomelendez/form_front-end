import './style.css'

export const Form: React.FC = () => {

    return(

        <form>
            <h1>FORM</h1>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button>LOGIN</button>
            <a>Forgot my Password</a>
        </form>

    )

}