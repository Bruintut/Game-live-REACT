import BoxLogin from "components/BoxLogin";
import * as S from "./style"

const Login = () =>{
    return(
        <S.Login>
            <S.LoginContent>
                <BoxLogin
                    onSubmitData={handleSubmit}
                    errorMessage={errorMessage}
                />
            </S.LoginContent>
        </S.Login>
    );
}

export default Login;