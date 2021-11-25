import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
font-size : 30px;
`;

const PersonalRanking = () => {
    return (
        <Container>
            <StyledText>개인 랭킹</StyledText>
        </Container>
    )
}

export default PersonalRanking;