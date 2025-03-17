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
import useKeyboardVisibility from "../../hooks/useKeyboardVisibility.js";
import { Platform } from "react-native";
const LoginScreen = () => {
  const { showPassword, togglePasswordVisibility } = usePasswordToggle();
  const isShowKeyboard = useKeyboardVisibility();
  console.log(isShowKeyboard);
  
  return (
    <Container>
      <InnerContainer>
        <InputContainer>
          <HeaderText style={{ marginTop: 0 }}>Увійти</HeaderText>

          <Input
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
          />
          <ShowPasswordContainer>
            <Input
              placeholder="Пароль"
              secureTextEntry={showPassword}
              textContentType="password"
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <ShowPasswordText>{!showPassword ? "Сховати" : "Показати"}</ShowPasswordText>
            </TouchableOpacity>
          </ShowPasswordContainer>
          <Button onPress={() => alert("Login")}>
            <ButtonText>Увійти</ButtonText>
          </Button>
         <LogInContainer
                     style={{
                       marginBottom:
                         Platform.OS === "ios" ? (isShowKeyboard ? 0 : 45) : 45,
                     }}
                   >
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
