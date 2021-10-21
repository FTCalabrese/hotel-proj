const Login = (props) => {
    const baseURL = props.base;
    return (
        <a href={`${baseURL}/auth/google`}>Sign in with Google</a>
    )
}


export default Login;