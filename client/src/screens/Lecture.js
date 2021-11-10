import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
`;
const RowContainer = styled.View`
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
border-bottom-width : 1px;
border-color : ${({ theme }) => theme.imgBtnBackground};
padding : 5px 20px 5px 0;
`;

const ColumnContainer = styled.View`
flex-direction: column;

`;
const StyledText = styled.Text`
font-size : 30px;
font-weight: bold;
`;
const SubText = styled.Text`
font-size : 20px;
`;

const Lecture = () => {


    return (
        <Container>
            <StyledText style={{ padding: 20 }}>내 정보</StyledText>
            <RowContainer>
                <TouchableOpacity><SubText>1학년</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>2학년</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>3학년</SubText></TouchableOpacity>
            </RowContainer>
            <RowContainer>
                <TouchableOpacity><SubText>3월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>6월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>9월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>11월</SubText></TouchableOpacity>
            </RowContainer>
        </Container>
    )
}

export default Lecture;