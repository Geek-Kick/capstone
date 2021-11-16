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

const Ranking = ({ navigation }) => {
    return (
        <Container>
            <StyledText>랭킹</StyledText>
            <Button title="나의 랭킹" onPress={() => { navigation.navigate('MyRanking') }} />
            <Button title="랭킹 목록" onPress={() => { navigation.navigate('RankingList') }} />
        </Container>
    )
}

export default Ranking;