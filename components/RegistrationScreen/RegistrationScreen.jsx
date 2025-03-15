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
  AddPhoto,
  AddPhotoButton,
  AddPhotoText,
  LogInContainer,
  LogInText,
} from "./RegistrationScreen.js";

const RegistrationScreen = () => {
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
          <Input placeholder="Пароль" placeholderTextColor="#BDBDBD" />

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
