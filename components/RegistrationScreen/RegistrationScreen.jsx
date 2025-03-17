import {
  Platform,
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
  AddPhoto,
  AddPhotoButton,
  AddPhotoText,
  LogInContainer,
  LogInText,
  ShowPasswordContainer,
  ShowPasswordText,
} from "./RegistrationScreen.js";
import { useEffect, useState } from "react";
import { usePasswordToggle } from "../../hooks/usePasswordToggle.js"; 
import  useKeyboardVisibility  from "../../hooks/useKeyboardVisibility.js";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showPassword, togglePasswordVisibility } = usePasswordToggle(); 
  
const isShowKeyboard = useKeyboardVisibility();
  
  return (
    <Container>
      <InnerContainer>
        <InputContainer>
          <AddPhoto>
            <AddPhotoButton onPress={() => alert("Add photo")}>
              <AddPhotoText>+</AddPhotoText>
            </AddPhotoButton>
          </AddPhoto>

          <HeaderText>Реєстрація</HeaderText>

          <Input placeholder="Логін" placeholderTextColor="#BDBDBD" />
          <Input
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
          />
          <ShowPasswordContainer>
            <Input
              placeholder="Пароль"
              secureTextEntry={showPassword}
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <ShowPasswordText>
                {!showPassword ? "Сховати" : "Показати"}
              </ShowPasswordText>
            </TouchableOpacity>
          </ShowPasswordContainer>
          <Button onPress={() => alert("Login")}>
            <ButtonText>Зареєструватися</ButtonText>
          </Button>
          <LogInContainer
            style={{
              marginBottom:
                Platform.OS === "ios" ? (isShowKeyboard ? 0 : 45) : 45,
            }}
          >
            <LogInText>Уже зареєстровані?</LogInText>
            <TouchableOpacity onPress={() => alert("Login")}>
              <LogInText>Увійти</LogInText>
            </TouchableOpacity>
          </LogInContainer>
        </InputContainer>
      </InnerContainer>
    </Container>
  );
};

export default RegistrationScreen;
