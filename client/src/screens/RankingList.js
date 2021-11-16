import React from 'react';
import styled from 'styled-components/native';
import { Button } from "../components";

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
font-size : 30px;
`;

const RankingList = ({ navigation }) => {
    return (
        <Container>
            <StyledText>랭킹 목록</StyledText>
            <Button title="학교별 랭킹" onPress={() => { }} />
            <Button title="개인 랭킹" onPress={() => { navigation.navigate('PersonalRanking') }} />
        </Container>
    )
}

export default RankingList;