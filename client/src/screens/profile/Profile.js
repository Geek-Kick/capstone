import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import { UserContext } from "../../contexts";
import styled from "styled-components/native";
import { Button, Image, Input } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ProfileLectureCard from "./components/ProfileLectureCard";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
`;
const LectureContainer = styled.View`
  align-items: center;
  border-right-width: 1px;
  padding: 0 10px 0 10px;
  border-color: ${{ theme } > theme.itemDesc};
`;
const RowContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  padding: 20px;
  border-radius: 10px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.itemBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const ItemDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.itemDesc};
`;

const ReviewTextContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const ReviewTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const ReviewDesc = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.itemDesc};
  margin-top: 5px;
`;

const ReviewTime = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.itemDesc};
`;
const MyReviewContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
const ReviewContainer = styled.View`
  flex: 0.4;
  background-color: ${({ theme }) => theme.reviewBackground};
  border-width: 1px;
  border-color: ${({ theme }) => theme.itemDesc};
  border-radius: 10px;
  margin-top: 0px;
  padding: 7px 20px 20px 20px;
  justify-content: center;
`;
const ColumnContainer = styled.View`
  flex-direction: column;
`;
const TrophyContainer = styled.View`
  background-color: ${({ theme }) => theme.trophyColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.trophyColor};
  border-radius: 50px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const RankingContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.background};
  border-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  border-radius: 10px;
  margin: 20px 0 20px 20px;
  width: 95%;
  justify-content: space-around;
  align-items: center;
`;
const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  border-radius: 10px;
`;

const RowwContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 20px 5px 0;
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
  const [name, setName] = useState(null);
  const [lecture, setLecture] = useState();
  useEffect(() => {
    AsyncStorage.getItem("token", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        axios
          .get("http://13.209.8.159:5000/users/profile", {
            headers: {
              Authorization: `Bearar ${result}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setName(response.data.nickName);
            setLecture(response.data.lecture);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, []);
  // console.log(route.params);
  return (
    <KeyboardAwareScrollView extraScrollHeight={40}>
      <Container style={{ margin: 20 }}>
        <RowContainer>
          <ColumnContainer>
            <Input
              label="????????? ??????"
              value={name}
              containerStyle={{ height: 10 }}
              style={{ width: 300, height: 65 }}
            />
            <LvText>Lv.01 ?????????</LvText>
            <Button
              title="??? ???????????? >"
              onPress={() => {}}
              containerStyle={{
                backgroundColor: "#a6a6a6",
                width: 20,
                height: 30,
                marginRight: 220,
              }}
              textStyle={{ fontSize: 10 }}
            />
            <Button
              title="???????????? >"
              onPress={() => {
                setUser({});
              }}
              containerStyle={{
                backgroundColor: "#7e0000",
                width: 50,
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
            console.log("?????? ->");
          }}
        />
        <StyledText style={{ margin: 10 }}>???????????? ??????</StyledText>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <ProfileLectureCard lectures={lecture} />
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0031.png"
              />
              <ItemTitle>????????? ????????????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0251.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>????????? ??????l</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0119.png"
              />
              <ItemTitle>????????????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0353.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>?????? ??????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0248.png"
              />
              <ItemTitle>????????? ????????????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0103.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>???????????? ??????ll</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </LectureContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <LectureContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0023.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>??????????????????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </LectureContainer>
          </TouchableOpacity> */}
        </ScrollView>
        <RowContainer></RowContainer>
        <StyledText style={{ margin: 10 }}>?????? ?????????</StyledText>
        <MyReviewContainer>
          <ReviewContainer>
            <ReviewTitle style={{ color: "#8E75F9", marginLeft: 130 }}>
              ????????? ????????????
            </ReviewTitle>
            <ReviewTextContainer>
              <ReviewTitle>?????????</ReviewTitle>
              <ReviewTime> 2021-12-10</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>?????? ????????? ???????????????!</ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
          <ReviewContainer>
            <ReviewTitle style={{ color: "#8E75F9", marginLeft: 130 }}>
              ?????? ??????
            </ReviewTitle>
            <ReviewTextContainer>
              <ReviewTitle>?????????</ReviewTitle>
              <ReviewTime> 2021-11-29</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>?????? ????????? ?????? ????????????..</ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
        </MyReviewContainer>
        <RowContainer />
        <StyledText style={{ margin: 10 }}>?????? ??????</StyledText>
        <MyReviewContainer></MyReviewContainer>
        <RankingContainer style={{ justifyContent: "space-around" }}>
          <MaterialIcons name="circle" size={90} color="#F8C646" />
          <TextContainer>
            <RowwContainer>
              <ItemTitle>?????? </ItemTitle>
              <StyledText style={{ fontWeight: "bold" }}>5400???</StyledText>
            </RowwContainer>
          </TextContainer>
          <StyledText>??????</StyledText>
        </RankingContainer>
        <RankingContainer style={{ justifyContent: "space-around" }}>
          <MaterialIcons name="circle" size={90} color="#00FFD1" />
          <TextContainer>
            <RowwContainer>
              <ItemTitle>?????? </ItemTitle>
              <StyledText style={{ fontWeight: "bold" }}>340???</StyledText>
            </RowwContainer>
          </TextContainer>
          <StyledText>??????????????????</StyledText>
        </RankingContainer>
        <RowContainer />
        <StyledText style={{ margin: 10 }}>?????? ??????</StyledText>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
