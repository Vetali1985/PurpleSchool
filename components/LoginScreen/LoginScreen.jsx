import {
  TouchableOpacity,
} from "react-native";
import {
  Container,
  InnerContainer,
  InputContainer,
  Input,
  Button,
  ButtonText,
  HeaderText,
  LogInContainer,
  LogInText,
  ShowPasswordContainer,
  ShowPasswordText,
} from "../RegistrationScreen/RegistrationScreen.js";
import { usePasswordToggle } from "../../hooks/usePasswordToggle.js";

const LoginScreen = () => {
  const { showPassword, togglePasswordVisibility } = usePasswordToggle();
  return (
    <Container>
      <InnerContainer>
        <InputContainer>
          <HeaderText style={{marginTop: 0}}>Увійти</HeaderText>

          <Input
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
          />
            <ShowPasswordContainer >
                      <Input
                        
                        placeholder="Пароль"
                        secureTextEntry={showPassword}
                        placeholderTextColor="#BDBDBD"
                      />
                      <TouchableOpacity onPress={togglePasswordVisibility}>
                        <ShowPasswordText
                        >
                          Показати
                        </ShowPasswordText>
                      </TouchableOpacity>
                    </ShowPasswordContainer>
          <Button onPress={() => alert("Login")}>
            <ButtonText>Увійти</ButtonText>
          </Button>
          <LogInContainer>
            <LogInText>Немає акаунту? </LogInText>

            <TouchableOpacity onPress={() => alert("Login")}>
              <LogInText>Зареєструватися</LogInText>
              
            </TouchableOpacity>
          </LogInContainer>
        </InputContainer>
      </InnerContainer>
    </Container>
  );
};

export default LoginScreen;
