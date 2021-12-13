import React from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from 'react-native-gesture-handler';


const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
border-radius : 10px;
`;

const TextContainer = styled.View`
background-color: ${({ theme }) => theme.background};
align-items: center;
border-radius : 10px;
`;

const StyledText = styled.Text`
font-size : 30px;
font-weight: bold;
margin : 10px;
`;
const RankingText = styled.Text`
font-size : 20px;
`;

// const TrophyContainer = styled.View`

// border-width : 1px;
// border-radius : 10px;
// `;

const TrophyContainer = styled.View`
background-color: ${({ theme }) => theme.trophyColor};
border-width : 1px;
border-color : ${({ theme }) => theme.trophyColor};
border-radius : 50px;
width : 80px;
height : 80px;
justify-content: center;
align-items: center;
margin : 20px;
`;

const RankingContainer = styled.View`
flex-direction: row;
background-color: ${({ theme }) => theme.background};
border-width : 1px;
border-color : ${({ theme }) => theme.imgBtnBackground};
border-radius: 10px;
margin : 20px 0 20px 20px;
width : 95%;
justify-content: center;
align-items: center;
`;

const RowContainer = styled.View`
flex-direction: row;
align-items: center;
padding : 5px 20px 5px 0;
`;

const Ranking = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView extraScrollHeight={40}>
            <Container style={{ margin: 20 }}>
                <StyledText>개인 랭킹</StyledText>
                <TouchableOpacity onPress={() => { navigation.navigate("MyRanking") }}>
                    <RankingContainer>
                        <TrophyContainer>
                            <AntDesign name="Trophy" size={50} color="orange" />
                        </TrophyContainer>
                        <Container>
                            <StyledText>종합</StyledText>
                            <RowContainer>
                                <StyledText>??</StyledText><RankingText>th</RankingText>
                            </RowContainer>
                            <RowContainer>
                                <RankingText style={{ fontSize: 10, color: 'grey' }}>누적 포인트</RankingText><RankingText style={{ fontSize: 10 }}>   ????? PT</RankingText>
                            </RowContainer>
                        </Container>
                    </RankingContainer>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("MyRanking") }}>
                    <RankingContainer>
                        <TrophyContainer>
                            <AntDesign name="Trophy" size={50} color="orange" />
                        </TrophyContainer>
                        <Container>
                            <StyledText>국어</StyledText>
                            <RowContainer>
                                <StyledText>??</StyledText><RankingText>th</RankingText>
                            </RowContainer>
                            <RowContainer>
                                <RankingText style={{ fontSize: 10, color: 'grey' }}>누적 포인트</RankingText><RankingText style={{ fontSize: 10 }}>   ????? PT</RankingText>
                            </RowContainer>
                        </Container>
                    </RankingContainer>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("MyRanking") }}>
                    <RankingContainer>
                        <TrophyContainer>
                            <AntDesign name="Trophy" size={50} color="orange" />
                        </TrophyContainer>
                        <Container>
                            <StyledText>수학</StyledText>
                            <RowContainer>
                                <StyledText>??</StyledText><RankingText>th</RankingText>
                            </RowContainer>
                            <RowContainer>
                                <RankingText style={{ fontSize: 10, color: 'grey' }}>누적 포인트</RankingText><RankingText style={{ fontSize: 10 }}>   ????? PT</RankingText>
                            </RowContainer>
                        </Container>
                    </RankingContainer>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("MyRanking") }}>
                    <RankingContainer>
                        <TrophyContainer>
                            <AntDesign name="Trophy" size={50} color="orange" />
                        </TrophyContainer>
                        <Container>
                            <StyledText>영어</StyledText>
                            <RowContainer>
                                <StyledText>??</StyledText><RankingText>th</RankingText>
                            </RowContainer>
                            <RowContainer>
                                <RankingText style={{ fontSize: 10, color: 'grey' }}>누적 포인트</RankingText><RankingText style={{ fontSize: 10 }}>   ????? PT</RankingText>
                            </RowContainer>
                        </Container>
                    </RankingContainer>
                </TouchableOpacity>
                <TouchableOpacity>
                    <RankingContainer>
                        <TrophyContainer>
                            <AntDesign name="Trophy" size={50} color="orange" />
                        </TrophyContainer>
                        <Container>
                            <StyledText>과학 탐구</StyledText>
                            <RowContainer>
                                <StyledText>??</StyledText><RankingText>th</RankingText>
                            </RowContainer>
                            <RowContainer>
                                <RankingText style={{ fontSize: 10, color: 'grey' }}>누적 포인트</RankingText><RankingText style={{ fontSize: 10 }}>   ????? PT</RankingText>
                            </RowContainer>
                        </Container>
                    </RankingContainer>
                </TouchableOpacity>
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Ranking;
{/* <Button title="나의 랭킹" onPress={() => { navigation.navigate('MyRanking') }} />
<Button title="랭킹 목록" onPress={() => { navigation.navigate('RankingList') }} /> */}