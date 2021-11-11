import React, { useState } from 'react';
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
const LevelContainer = styled.View`
background-color: ${({ theme }) => theme.background};
border-width : 1px;
border-color : ${({ theme }) => theme.text};
border-radius: 10px;
margin : 20px 0 20px 0;

width : 95%;
`;
const StyledText = styled.Text`
font-size : 30px;
font-weight: bold;
`;
const GradeText = styled.Text`
font-size : 20px;
color : ${({ theme }) => theme.gradeText};
`;
const MonthText = styled.Text`
font-size : 20px;
color : ${({ theme }) => theme.monthText};

`;



const Lecture = () => {


    return (
        <Container>
            <StyledText style={{ padding: 10 }}>내 강의 정보</StyledText>
            <RowContainer>
                <TouchableOpacity onPress={() => { }}><GradeText>1학년</GradeText></TouchableOpacity>
                <TouchableOpacity><GradeText>2학년</GradeText></TouchableOpacity>
                <TouchableOpacity><GradeText>3학년</GradeText></TouchableOpacity>
            </RowContainer>
            <RowContainer>
                <TouchableOpacity><MonthText>3월</MonthText></TouchableOpacity>
                <TouchableOpacity><MonthText>6월</MonthText></TouchableOpacity>
                <TouchableOpacity><MonthText>9월</MonthText></TouchableOpacity>
                <TouchableOpacity><MonthText>11월</MonthText></TouchableOpacity>
            </RowContainer>
            <RowContainer>
                <LevelContainer>
                    <StyledText>등급컷</StyledText>
                    <Input></Input>
                    <StyledText>내 등급</StyledText>
                    <Input></Input>
                </LevelContainer>
            </RowContainer>
            <StyledText>인기 강좌</StyledText>
            <RowContainer>
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
            </RowContainer>
            <StyledText>맞춤 강의 OOO</StyledText>
            <RowContainer>
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
                <Image style={{ borderRadius: 0, width: 100, height: 200 }} />
            </RowContainer>
        </Container>
    )
}

export default Lecture;