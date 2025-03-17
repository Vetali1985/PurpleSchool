import React, { useState } from 'react';
import { TextInput } from 'react-native';
import Styled from 'styled-components/native';

export const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = Styled.View`
flex: 1;
width: 100%;
justify-content: flex-end;
align-items: center;
`;

export const InputContainer = Styled.View`
position: relative;
padding: 16px;
width: 100%;
align-items: center;
background-color: #FFFFFF;
border-top-left-radius: 16px;
border-top-right-radius: 16px;
`;

const StyledInput = Styled.TextInput`
position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  border-width: 1px;
  background-color: #F6F6F6;
  border-radius: 8px;
  padding-left: 10px;
`;

export const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledInput
      {...props}
      placeholderTextColor="#BDBDBD"
      style={{
        borderColor: isFocused ? '#FF6C00' : '#E8E8E8',
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export const Button = Styled.TouchableOpacity`
width: 353px;
height: 50px;
background-color: #FF6C00;
border-radius: 100px;
margin-bottom: 16px;
justify-content: center;
align-items: center;
`;

export const ButtonText = Styled.Text`
font-size: 16px;
color: #FFFFFF;
`;

export const HeaderText = Styled.Text`
font-size: 30px;
font-weight: bold;
font-style: Roboto;
color: #212121;
margin-bottom: 32px;
margin-top: 92px;
`;

export const AddPhoto = Styled.View`
position: absolute;
top: -60px;
width: 120px;
height: 120px;
border-radius: 16px;
background-color: #F6F6F6;
justify-content: center;
align-items: center;
`;

export const AddPhotoButton = Styled.TouchableOpacity`
position: absolute;
bottom: 14px;
right: -12px;
width: 25px;
height: 25px;
border-radius: 100px;
background-color: #FFFFFF;
justify-content: center;
align-items: center;  
border: 1px solid #FF6C00;  
`;

export const AddPhotoText = Styled.Text`
color: #FF6C00;
`;

export const LogInContainer = Styled.View`
justify-content: center;
align-items: center;
flex-direction: row;
/* margin-bottom: 45px; */
`;

export const LogInText = Styled.Text`
font-size: 16px;
font-weight: 400;
color: #1B4371;
`;
export const ShowPasswordText = Styled.Text`
position: absolute;
top: 50%;
right: 20px;
transform: translateY(-52px);
color: #1B4371;
font-size: 16px;
`;
export const ShowPasswordContainer = Styled.View`
  width: 100%;
  margin-bottom: 16px;
`;