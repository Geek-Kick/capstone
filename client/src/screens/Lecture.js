import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
font-size : 30px;
`;

const Lecture = () => {
    return (
        <Container>
            <StyledText>강의목록</StyledText>
        </Container>
    )
}

export default Lecture;