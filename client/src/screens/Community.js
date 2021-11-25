import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
font-size : 30px;
`;

const Community = () => {
    return (
        <Container>
            <StyledText>커뮤니티</StyledText>
        </Container>
    )
}

export default Community;