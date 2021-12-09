import React from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';


const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
border-radius : 10px;
flex-direction: row;
justify-content: space-around;
`;

const NormalContainer = styled.View`
margin-top : 20px;
border-width : 1px;
border-color : ${({ theme }) => theme.text};
justify-content: center;
align-items: center;
border-radius : 30px;
`
const ListContainer = styled.View`
margin-top : 20px;
margin-bottom: 20px;
width : 90%;
border-width : 1px;
border-color : ${({ theme }) => theme.text};
justify-content: space-between;
align-items: center;
`
const RealContainer = styled.View`
flex : 0.4;
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
font-size : 15px;
color : ${({ theme }) => theme.imgBtnBackground};
`;


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
align-items: center;
justify-content: space-around;
`;

const RowContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding : 5px 20px 5px 0;
`;

const Quiz = () => {
    return (
        <Container>
            <RealContainer>
                <ScrollView>
                    <StyledText>내 퀴즈</StyledText>
                    <TouchableOpacity>
                        <RankingContainer>
                            <TrophyContainer /><TextContainer>
                                <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                                <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                            </TextContainer>
                            <StyledText>국어</StyledText>
                        </RankingContainer>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RankingContainer>
                            <TrophyContainer /><TextContainer>
                                <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                                <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                            </TextContainer>
                            <StyledText>국어</StyledText>
                        </RankingContainer>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RankingContainer>
                            <TrophyContainer /><TextContainer>
                                <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                                <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                            </TextContainer>
                            <StyledText>국어</StyledText>
                        </RankingContainer>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RankingContainer>
                            <TrophyContainer /><TextContainer>
                                <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                                <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                            </TextContainer>
                            <StyledText>국어</StyledText>
                        </RankingContainer>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RankingContainer>
                            <TrophyContainer /><TextContainer>
                                <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                                <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                            </TextContainer>
                            <StyledText>국어</StyledText>
                        </RankingContainer>
                    </TouchableOpacity>
                    <RankingContainer>
                        <TrophyContainer /><TextContainer>
                            <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                            <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                        </TextContainer>
                        <StyledText>국어</StyledText>
                    </RankingContainer>
                    <RankingContainer>
                        <TrophyContainer /><TextContainer>
                            <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                            <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                        </TextContainer>
                        <StyledText>국어</StyledText>
                    </RankingContainer>
                    <RankingContainer>
                        <TrophyContainer /><TextContainer>
                            <RowContainer><RankingText>등수</RankingText><StyledText>???</StyledText></RowContainer>
                            <RowContainer><RankingText>누적 포인트 </RankingText><RankingText style={{ fontWeight: 'bold' }}>213211 PT</RankingText></RowContainer>
                        </TextContainer>
                        <StyledText>국어</StyledText>
                    </RankingContainer>
                </ScrollView>
            </RealContainer>
            <RealContainer>
                <StyledText>종합 등수</StyledText>
                <NormalContainer>
                    <RankingText style={{ marginTop: 20 }}>TOP 100</RankingText>
                    <ListContainer>
                        <ScrollView style={{
                            height: 500
                        }}>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                            <RankingText>Rank</RankingText>
                        </ScrollView>
                    </ListContainer>
                </NormalContainer>
            </RealContainer>
        </Container >
    )
}

export default Quiz;