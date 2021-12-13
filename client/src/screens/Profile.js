import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components/native";

import { UserContext } from "../contexts";
import styled from "styled-components/native";
import { Button, Image, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
`;
const LectureContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.imgBtnBackground};
  border-radius: 10px;
`;
const RowContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  padding: 0 20px;
  border-radius: 10px;
`;

const ColumnContainer = styled.View`
  flex-direction: column;
`;

const LvText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Profile = ({ navigation, route }) => {
  const { setUser } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  useEffect(async () => {
    AsyncStorage.getItem("token", (err, result) => {
      if (err) {
        console.log("storeage");
        console.log(err);
      } else {
        console.log("before axios");
        axios
          .get("http://13.209.8.159:5000/users/profile", {
            headers: {
              Authorization: `Bearar ${result}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    // const response = await axios
    //   .get("http://13.209.8.159:5000/users/login", {
    //     response,
    //   })
    //   .then((response) => {
    //     AsyncStorage.getItem("token");
    //   });
    return () => {
      console.log("bye");
    };
  });
  console.log(route.params);
  return (
    <KeyboardAwareScrollView extraScrollHeight={40}>
      <Container style={{ margin: 20 }}>
        <RowContainer>
          <ColumnContainer>
            <Input
              label="사용자 이름"
              value="박상호"
              containerStyle={{ height: 10 }}
              style={{ width: 300, height: 55 }}
            />
            <LvText>Lv.01 브론즈</LvText>
            <Button
              title="내 정보수정 >"
              onPress={() => {}}
              containerStyle={{
                backgroundColor: "#a6a6a6",
                width: 20,
                height: 30,
                marginRight: 220,
              }}
              textStyle={{ fontSize: 10 }}
            />
          </ColumnContainer>

          <Image
            source="https://firebasestorage.googleapis.com/v0/b/rn-chat-fb183.appspot.com/o/icon.png?alt=media"
            style={{ width: 130, height: 130, marginTop: 20 }}
          />
        </RowContainer>
        <Button
          title="Main"
          containerStyle={{
            flex: 1,
            width: 20,
            borderRadius: 0,
            /* backgroundColor: "#fff", borderWidth: 1, borderColor: theme.main */
          }}
          /* textStyle={{ color: theme.main }}  */
          onPress={() => {
            console.log("버튼 ->");
          }}
        />
        <StyledText style={{ margin: 10 }}>수강중인 강좌</StyledText>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }}
              />
            </LectureContainer>
          </TouchableOpacity>
        </ScrollView>
        <RowContainer></RowContainer>
        <StyledText style={{ margin: 10 }}>나의 커뮤니티 활동</StyledText>
        <RowContainer>
          <Image
            style={{
              borderRadius: 0,
              width: 100,
              height: 100,
              marginRight: 30,
            }}
          />
          <Input
            label="최근 게시글"
            value="----------------------------------------"
            containerStyle={{ height: 10 }}
            style={{ width: 500, height: 55 }}
          />
        </RowContainer>
        <StyledText style={{ margin: 10 }}>나의 랭킹</StyledText>
        <RowContainer>
          <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
        </RowContainer>
        <StyledText style={{ margin: 10 }}>나의 퀴즈</StyledText>
        <RowContainer>
          <Image style={{ width: 100, height: 100 }} />
          <Image style={{ width: 100, height: 100 }} />
          <Image style={{ width: 100, height: 100 }} />
        </RowContainer>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
