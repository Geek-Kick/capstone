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
justify-content: space-between;
border-bottom-width : 1px;
border-color : ${({ theme }) => theme.imgBtnBackground};
padding : 0 20px;
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
            <StyledText style={{ paddingTop: 10, paddingLeft: 20 }}>내 정보</StyledText>
            <RowContainer>
                <TouchableOpacity><SubText>1학년 3월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>1학년 6월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>1학년 9월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>2학년 3월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>2학년 6월</SubText></TouchableOpacity>
                <TouchableOpacity><SubText>2학년 9월</SubText></TouchableOpacity>
            </RowContainer>
        </Container>
    )
}

export default Lecture;