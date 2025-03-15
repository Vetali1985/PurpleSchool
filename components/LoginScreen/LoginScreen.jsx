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
} from "../RegistrationScreen/RegistrationScreen.js";

const LoginScreen = () => {
  return (
    <Container>
      <InnerContainer>
        <InputContainer>
          <HeaderText>Увійти</HeaderText>

          <Input
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
          />
          <Input
            style={{ marginBottom: 43 }}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
          />
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
