import {
  TouchableOpacity,
  View,
  Text,
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
import { useState } from "react";
import { usePasswordToggle } from "../../hooks/usePasswordToggle.js"; 

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showPassword, togglePasswordVisibility } = usePasswordToggle(); 

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
            <ButtonText>Зареєструватися</ButtonText>
          </Button>
          <LogInContainer>
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
