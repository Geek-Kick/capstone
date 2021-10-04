import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Button, Image, Input, ErrorMessage } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { signup } from '../firebase';
import { Alert } from "react-native";
import { validateEmail, removeWhitespace } from "../utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  padding: 50px 20px;
`;

const DEFAULT_PHOTO =
  "https://firebasestorage.googleapis.com/v0/b/rn-chat-fb183.appspot.com/o/profile-circle.png?alt=media";
const Signup = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [photo, setPhoto] = useState(DEFAULT_PHOTO);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const refPassword = useRef(null);
  const refPasswordConfirm = useRef(null);
  const refNickname = useRef(null);
  const refDidMount = useRef(null);
  // 편법

  useEffect(() => {
    setDisabled(
      !(nickname && password && passwordConfirm && email && !errorMessage)
    );
  }, [email, nickname, password, passwordConfirm, errorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let error = "";
      if (!email) {
        error = "이메일을 입력하세요";
      } else if (!validateEmail(email)) {
        error = "올바른 이메일 형식을 입력해주세요";
      } else if (password.length < 6) {
        error = "비밀번호가 6자리 이상이어야 합니다.";
      } else if (password !== passwordConfirm) {
        error = "비밀번호가 다릅니다!";
      } else if (!nickname) {
        error = "닉네임을 입력하세요";
      } else {
        error = "";
      }

      setErrorMessage(error);
    } else {
      refDidMount.current = true;
    }
  }, [email, nickname, password, passwordConfirm]);

  const _handleSignupBtnPress = async () => {
    try {
      const user = await signup({ email, password, photo, nickname });
      navigation.navigate("Profile", { user });
    } catch (e) {
      Alert.alert("정확한 정보를 입력해주세요.", e.message);
    }
  };
  return (
    <KeyboardAwareScrollView extraScrollHeight={40}>
      <Container insets={insets}>
        <Image showButton={true} url={photo} onChangePhoto={setPhoto} />
        <Input
          label="Email : "
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => refPassword.current.focus()}
          onBlur={() => setEmail(removeWhitespace(email))}
        />
        <Input
          ref={refPassword}
          label="비밀번호 : "
          placeholder="비밀번호"
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          onSubmitEditing={() => refPasswordConfirm.current.focus()}
          onBlur={() => setPassword(removeWhitespace(password))}
        />
        <Input
          ref={refPasswordConfirm}
          label="비밀번호 확인 : "
          placeholder="비밀번호 확인"
          returnKeyType="next"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          isPassword={true}
          onSubmitEditing={() => refNickname.current.focus()}
          onBlur={() => setPassword(removeWhitespace(passwordConfirm))}
        />
        <Input
          ref={refNickname}
          label="닉네임 : "
          placeholder="닉네임"
          returnKeyType="done"
          value={nickname}
          onChangeText={setNickname}
          onSubmitEditing={_handleSignupBtnPress}
          onBlur={() => setNickname(nickname.trim())}
          maxLength={12}
        />
        <ErrorMessage message={errorMessage} />
        <Button
          title="회원가입"
          onPress={_handleSignupBtnPress}
          disabled={disabled}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
