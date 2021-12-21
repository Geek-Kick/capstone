import React from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

const NormalContainer = styled.View`
  margin-top: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.text};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
const ListContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.text};
  justify-content: space-between;
  align-items: center;
`;
const RealContainer = styled.View`
  flex: 0.4;
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
  font-size: 15px;
  color: ${({ theme }) => theme.imgBtnBackground};
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
  align-items: center;
  justify-content: space-around;
`;

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px 5px 0;
`;
const rankItem = [];
for (let i = 0; i < 1000; i++) {
  rankItem.push({
    id: i,
    rank: `${i}위`,
    title: `고등학교  ${i}`,
  });
}

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
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

const Item = ({ item: { id, rank, title }, onPress }) => {
  return (
    <ItemContainer>
      <ItemTextContainer>
        <ItemDesc>{rank}</ItemDesc>
        <ItemTitle>{title}</ItemTitle>
      </ItemTextContainer>
    </ItemContainer>
  );
};

const Quiz = ({ navigation }) => {
  return (
    <Container>
      <RealContainer>
        <ScrollView>
          <StyledText>내 퀴즈</StyledText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("QuizMain");
            }}
          >
            <RankingContainer>
              <View style={style.subject_bronze}>
                <AntDesign
                  name="Trophy"
                  size={50}
                  color="orange"
                  style={style.trophy}
                />
              </View>
              <TextContainer>
                <RowContainer>
                  <RankingText>등수</RankingText>
                  <StyledText>???</StyledText>
                </RowContainer>
                <RowContainer>
                  <RankingText>누적 포인트 </RankingText>
                  <RankingText style={{ fontWeight: "bold" }}>
                    213211 PT
                  </RankingText>
                </RowContainer>
              </TextContainer>
              <StyledText>국어</StyledText>
            </RankingContainer>
          </TouchableOpacity>
          <TouchableOpacity>
            <RankingContainer>
              <View style={style.subject_diamond}>
                <AntDesign
                  name="Trophy"
                  size={50}
                  color="orange"
                  style={style.trophy}
                />
              </View>
              <TextContainer>
                <RowContainer>
                  <RankingText>등수</RankingText>
                  <StyledText>???</StyledText>
                </RowContainer>
                <RowContainer>
                  <RankingText>누적 포인트 </RankingText>
                  <RankingText style={{ fontWeight: "bold" }}>
                    213211 PT
                  </RankingText>
                </RowContainer>
              </TextContainer>
              <StyledText>영어</StyledText>
            </RankingContainer>
          </TouchableOpacity>
          <TouchableOpacity>
            <RankingContainer>
              <View style={style.subject_sliver}>
                <AntDesign
                  name="Trophy"
                  size={50}
                  color="orange"
                  style={style.trophy}
                />
              </View>
              <TextContainer>
                <RowContainer>
                  <RankingText>등수</RankingText>
                  <StyledText>???</StyledText>
                </RowContainer>
                <RowContainer>
                  <RankingText>누적 포인트 </RankingText>
                  <RankingText style={{ fontWeight: "bold" }}>
                    213211 PT
                  </RankingText>
                </RowContainer>
              </TextContainer>
              <StyledText>수학</StyledText>
            </RankingContainer>
          </TouchableOpacity>
          <TouchableOpacity>
            <RankingContainer>
              <View style={style.subject_gold}>
                <AntDesign
                  name="Trophy"
                  size={50}
                  color="orange"
                  style={style.trophy}
                />
              </View>
              <TextContainer>
                <RowContainer>
                  <RankingText>등수</RankingText>
                  <StyledText>???</StyledText>
                </RowContainer>
                <RowContainer>
                  <RankingText>누적 포인트 </RankingText>
                  <RankingText style={{ fontWeight: "bold" }}>
                    213211 PT
                  </RankingText>
                </RowContainer>
              </TextContainer>
              <StyledText>물리</StyledText>
            </RankingContainer>
          </TouchableOpacity>
          <TouchableOpacity>
            <RankingContainer>
              <View style={style.subject_platinum}>
                <AntDesign
                  name="Trophy"
                  size={50}
                  color="orange"
                  style={style.trophy}
                />
              </View>
              <TextContainer>
                <RowContainer>
                  <RankingText>등수</RankingText>
                  <StyledText>???</StyledText>
                </RowContainer>
                <RowContainer>
                  <RankingText>누적 포인트 </RankingText>
                  <RankingText style={{ fontWeight: "bold" }}>
                    213211 PT
                  </RankingText>
                </RowContainer>
              </TextContainer>
              <StyledText>화학</StyledText>
            </RankingContainer>
          </TouchableOpacity>
          <RankingContainer>
            <View style={style.subject_sliver}>
              <AntDesign
                name="Trophy"
                size={50}
                color="orange"
                style={style.trophy}
              />
            </View>
            <TextContainer>
              <RowContainer>
                <RankingText>등수</RankingText>
                <StyledText>???</StyledText>
              </RowContainer>
              <RowContainer>
                <RankingText>누적 포인트 </RankingText>
                <RankingText style={{ fontWeight: "bold" }}>
                  213211 PT
                </RankingText>
              </RowContainer>
            </TextContainer>
            <StyledText>생명과학</StyledText>
          </RankingContainer>
          <RankingContainer>
            <View style={style.subject_bronze}>
              <AntDesign
                name="Trophy"
                size={50}
                color="orange"
                style={style.trophy}
              />
            </View>
            <TextContainer>
              <RowContainer>
                <RankingText>등수</RankingText>
                <StyledText>???</StyledText>
              </RowContainer>
              <RowContainer>
                <RankingText>누적 포인트 </RankingText>
                <RankingText style={{ fontWeight: "bold" }}>
                  213211 PT
                </RankingText>
              </RowContainer>
            </TextContainer>
            <StyledText>지구과학</StyledText>
          </RankingContainer>
        </ScrollView>
      </RealContainer>
      <RealContainer>
        <StyledText>종합 등수</StyledText>
        <NormalContainer>
          <RankingText style={{ marginTop: 20 }}>TOP 100</RankingText>
          <FlatList
            data={rankItem}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item["id"].toString()}
          />
        </NormalContainer>
      </RealContainer>
    </Container>
  );
};

const style = StyleSheet.create({
  subject_bronze: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#874100",
    margin: 20,
  },

  subject_sliver: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#b6b6b6",
    margin: 20,
  },

  subject_gold: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#ffea29",
    margin: 20,
  },

  subject_platinum: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#00caa6",
    margin: 20,
  },

  subject_diamond: {
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#004cdf",
    margin: 20,
  },

  trophy: {
    left: 15,
    top: 15,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Quiz;
