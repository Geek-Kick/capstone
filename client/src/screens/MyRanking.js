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
flex : 0.5;
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
justify-content: space-around;
align-items: center;
`;

const RowContainer = styled.View`
flex-direction: row;
align-items: center;
padding : 5px 20px 5px 0;
`;

const MyRanking = () => {
    return (
        <Container>
            <RealContainer style={{ margin: 20 }}>
                <StyledText>학교 랭킹</StyledText>
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
            <RealContainer style={{ margin: 20 }}>
                <StyledText>학교 내 나의 랭킹</StyledText>
                <RankingContainer style={{ justifyContent: 'space-around' }}>
                    <TrophyContainer /><TextContainer>
                        <RowContainer><RankingText>등수 </RankingText><RankingText style={{ fontWeight: 'bold' }}>???</RankingText></RowContainer>
                    </TextContainer>
                    <StyledText>ㅁㅁ고등학교</StyledText>
                </RankingContainer>
                <StyledText>과목 내 나의 랭킹</StyledText>
                <RankingContainer>
                    <TrophyContainer /><TextContainer>

                        <RowContainer><RankingText>등수 </RankingText><RankingText style={{ fontWeight: 'bold' }}>???</RankingText></RowContainer>
                    </TextContainer>
                    <StyledText>국어</StyledText>
                </RankingContainer>
                <StyledText>지역 내 나의 랭킹</StyledText>
                <RankingContainer>
                    <TrophyContainer /><TextContainer>

                        <RowContainer><RankingText>등수 </RankingText><RankingText style={{ fontWeight: 'bold' }}>???</RankingText></RowContainer>
                    </TextContainer>
                    <StyledText>용인</StyledText>
                </RankingContainer>
            </RealContainer>
        </Container >
    )
}

export default MyRanking;