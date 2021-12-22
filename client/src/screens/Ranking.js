import React from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
`;

const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  border-radius: 10px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;
const RankingText = styled.Text`
  font-size: 20px;
`;

// const TrophyContainer = styled.View`

// border-width : 1px;
// border-radius : 10px;
// `;

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
  justify-content: center;
  align-items: center;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 20px 5px 0;
`;

const Ranking = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView extraScrollHeight={40}>
      <Container style={{ margin: 20 }}>
        <StyledText>ALFY 랭킹</StyledText>
        <RankingText style={{ margin: 20 }}>
          개인 랭킹을 보려면 TAB하세요
        </RankingText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#00CAA6" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>종합</StyledText>
              <RowContainer>
                <StyledText>5400</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}> 25300 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#874100" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>국어</StyledText>
              <RowContainer>
                <StyledText>2405</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}> 3000 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#B6B6B6" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>수학</StyledText>
              <RowContainer>
                <StyledText>3106</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}> 4500 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#004CDF" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>영어</StyledText>
              <RowContainer>
                <StyledText>127</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}> 9000 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#FFEA29" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>물리</StyledText>
              <RowContainer>
                <StyledText>2115</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}>5600 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#00cAA6" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>화학</StyledText>
              <RowContainer>
                <StyledText>1107</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}>6102 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#B6B6B6" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>생명과학</StyledText>
              <RowContainer>
                <StyledText>2887</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}>2817 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyRanking");
          }}
        >
          <RankingContainer>
            <TrophyContainer style={{ backgroundColor: "#874100" }}>
              <AntDesign name="Trophy" size={50} color="orange" />
            </TrophyContainer>
            <Container>
              <StyledText>지구과학</StyledText>
              <RowContainer>
                <StyledText>9999 ↑</StyledText>
                <RankingText>th</RankingText>
              </RowContainer>
              <RowContainer>
                <RankingText style={{ fontSize: 10, color: "grey" }}>
                  누적 포인트
                </RankingText>
                <RankingText style={{ fontSize: 10 }}>23 PT</RankingText>
              </RowContainer>
            </Container>
          </RankingContainer>
        </TouchableOpacity>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Ranking;
{
  /* <Button title="나의 랭킹" onPress={() => { navigation.navigate('MyRanking') }} />
<Button title="랭킹 목록" onPress={() => { navigation.navigate('RankingList') }} /> */
}
