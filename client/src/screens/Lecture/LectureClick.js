import React, { useContext } from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Image, Input } from "../../components";
import { Alert, Dimensions } from "react-native";
import Navigation from "../../navigations";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const LectureContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const VideoContainer = styled.View`
  flex: 1;
`;
const LectureDesc = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.itemDesc};
`;
const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
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
const ItemContainer = styled.View`
  border-right-width: 1px;
  padding: 0 10px 0 10px;
  justify-content: center;
  align-items : center;
  border-color: ${({ theme }) => theme.itemDesc};

`;
const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const ItemDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;

`;
const ReviewContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.reviewBackground};
  border-width: 1px;
  border-color: ${({ theme }) => theme.itemDesc};
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
`;
const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
  padding: 0 20px;
`;
const IntroduceContainer = styled.View`
  width: 80%;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.imgBtnBackground};
`;
const IconText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.main};
`;
const LectureClick = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  return (
    <KeyboardAwareScrollView style={{ margin: 20 }}>
      <Container style={{ margin: 20 }}>
        <VideoContainer>
          <Image
            url="https://i.ytimg.com/vi/qJL_NKPdC18/maxresdefault.jpg"
            style={{
              borderRadius: 0,
              width: Dimensions.get("window").width,
              height: 300,
              margin: 10,
            }}
            showButton={true}
          />
        </VideoContainer>
        <StyledText>???????????? ????????? ????????????</StyledText>

        <Button
          title="?????? ????????????"
          onPress={() => {
            console.log("??????");
          }}
          containerStyle={{ marginBottom: 30, marginLeft: 60, marginRight: 60 }}
        />
        <RowContainer style={{ paddingBottom: 20 }}>
          <Container>
            <TouchableOpacity>
              <MaterialIcons
                name="add"
                size={40}
                color={theme.main}
                style={{ marginLeft: 20, marginRight: 20 }}
              />
              <IconText>?????? ?????????</IconText>
            </TouchableOpacity>
          </Container>
          <Container>
            <TouchableOpacity>
              <MaterialIcons
                name="rate-review"
                size={40}
                color={theme.main}
                style={{ marginLeft: 13, marginRight: 20 }}
              />
              <IconText>?????? ??????</IconText>
            </TouchableOpacity>
          </Container>
          <Container>
            <TouchableOpacity>
              <MaterialIcons
                name="ios-share"
                size={40}
                color={theme.main}
                style={{ marginLeft: 10, marginRight: 20 }}
              />
              <IconText>?????? ??????</IconText>
            </TouchableOpacity>
          </Container>
        </RowContainer>
        <IntroduceContainer>
          <StyledText style={{ marginBottom: 5 }}>?????? ??????</StyledText>
          <LectureDesc>#????????? ??????</LectureDesc>
          <LectureDesc>#????????? ???????????? ???????????? ??????</LectureDesc>
          <LectureDesc>#????????? ???????????? ???????????? ??????</LectureDesc>
          <StyledText style={{ marginTop: 5, marginBottom: 5 }}>
            ?????? ??????
          </StyledText>
          <LectureDesc>?????? ????????? ????????? ?????????</LectureDesc>
          <LectureDesc>??????+?????? ?????? ???????????? ?????? ?????????</LectureDesc>
          <LectureDesc>????????? ?????? ?????? ?????? ???????????? ?????? ?????????</LectureDesc>
        </IntroduceContainer>
        <IntroduceContainer>
          <StyledText>?????????</StyledText>
          <ReviewContainer>
            <ReviewTextContainer>
              <ReviewTitle>?????????</ReviewTitle>
              <ReviewTime> 2021-12-10</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>?????? ????????? ???????????????!</ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
          <ReviewContainer>
            <ReviewTextContainer>
              <ReviewTitle>?????????</ReviewTitle>
              <ReviewTime> 2021-12-02</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>
              ??? ?????? ???????????? ????????????????????? ???????????? ??????????????????!!
            </ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star-half" size={24} color="#F8C646" />
              <MaterialIcons name="star-border" size={24} color="#F8C646" />

            </ReviewTextContainer>
          </ReviewContainer>
          <ReviewContainer>
            <ReviewTextContainer>
              <ReviewTitle>?????????</ReviewTitle>
              <ReviewTime> 2021-12-01</ReviewTime>
            </ReviewTextContainer>
            <ReviewDesc>
              ??? ?????? ?????? 9??? ?????? 1?????? ???????????????. ?????????
            </ReviewDesc>
            <ReviewTextContainer containerStyle={{ marginTop: 10 }}>
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
              <MaterialIcons name="star" size={24} color="#F8C646" />
            </ReviewTextContainer>
          </ReviewContainer>
          <Button
            title="????????? ????????? >"
            onPress={() => { }}
            containerStyle={{
              backgroundColor: "#EFEBFF",
            }}
            textStyle={{ fontSize: 10, color: "black" }}
          />
          <Input placeholder="???????????? ???????????????." />
          <Button
            title="??????"
            containerStyle={{}}
            onPress={() => console.log("??????")}
          />
        </IntroduceContainer>

        <StyledText>????????? ?????? ?????????</StyledText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0248.png"
              />
              <ItemTitle>?????? ????????????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0217.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>???????????? ??????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0218.png"
              />
              <ItemTitle>????????? ??????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0131.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>?????? ??????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                style={{ borderRadius: 0, width: 100, height: 100 }}
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0315.png"
              />
              <ItemTitle>???????????? ??????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0103.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>???????????? ??????ll</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0134.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>Summary ????????????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0032.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>Summary ??????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LectureClick");
            }}
          >
            <ItemContainer>
              <Image
                url="https://image.ebsi.co.kr/images/teacher_new/@/T0023.png"
                style={{ borderRadius: 0, width: 100, height: 100 }}
              />
              <ItemTitle>??????????????????</ItemTitle>
              <ItemDesc>?????????</ItemDesc>
            </ItemContainer>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default LectureClick;
