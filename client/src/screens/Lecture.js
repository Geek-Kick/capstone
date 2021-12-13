import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Image, Input } from '../components';
import { LectureClick } from '../screens';
import { ScrollView, HorizontalScrollView, FlatList } from 'react-native'

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
`;
const LectureContainer = styled.View`
flex : 1;
flex-direction : column;
background-color: ${({ theme }) => theme.imgBtnBackground};
border-radius : 10px;
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
border-color : ${({ theme }) => theme.imgBtnBackground};
border-radius: 10px;
margin : 20px 0 20px 0;
width : 95%;
`;
const StyledText = styled.Text`
font-size : 30px;
font-weight: bold;
margin : 10px;
`;
const GradeText = styled.Text`
font-size : 20px;
color : ${({ theme }) => theme.gradeText};
`;
const MonthText = styled.Text`
font-size : 20px;
color : ${({ theme }) => theme.monthText};
`;

const LectureItemContainer = styled.TouchableOpacity`
align-items : center;
border-right-width : 1px;
border-color : ${({ theme }) => theme.itemBorder};
`;

const lectureItem = [];
for (let i = 0; i < 10; i++) {
    lectureItem.push({
        id: i,
        uri: "",
        title: "",

    })
}
const LectureItemImage = styled.Image`
background-color : ${({ theme }) => theme.text}
width : 100px;
height : 150px;
margin : 10px;
`;
const LectureItemTitle = styled.Text`
font-size:20px;
font-weight : 600;
`;

const LectureItemDesc = styled.Text`
font-size : 16px;

`;
const LectureItem = ({ item: { id, uri, title } }, onPress) => {
    return (
        <LectureItemContainer onPress={() => onPress({ uri, title })}>
            <LectureItemImage uri={uri} />
            <LectureItemTitle>{title}</LectureItemTitle>
        </LectureItemContainer >
    )
}
const Lecture = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView extraScrollHeight={40}>

            <Container style={{ margin: 20 }}>
                <StyledText >내 강의 정보</StyledText>
                <RowContainer>

                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity><GradeText style={{ color: "#111", paddingLeft: 20 }}>1학년 3월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>1학년 6월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>1학년 9월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>1학년 3월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>2학년 6월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>2학년 6월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>2학년 9월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>3학년 3월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>3학년 6월</GradeText></TouchableOpacity>
                        <TouchableOpacity><GradeText style={{ paddingLeft: 150 }}>3학년 9월</GradeText></TouchableOpacity>
                    </ScrollView>
                </RowContainer>
                {/* <RowContainer>
                    <TouchableOpacity><GradeText style={{ color: "#111" }}>1학년</GradeText></TouchableOpacity>
                    <TouchableOpacity><GradeText>2학년</GradeText></TouchableOpacity>
                    <TouchableOpacity><GradeText>3학년</GradeText></TouchableOpacity>
                </RowContainer>
                <RowContainer>
                    <TouchableOpacity><MonthText style={{ color: "#111" }}>3월</MonthText></TouchableOpacity>
                    <TouchableOpacity><MonthText>6월</MonthText></TouchableOpacity>
                    <TouchableOpacity><MonthText>9월</MonthText></TouchableOpacity>
                    <TouchableOpacity><MonthText>11월</MonthText></TouchableOpacity>
                </RowContainer> */}
                <RowContainer>
                    <LevelContainer style={{ padding: 20 }}>
                        <StyledText>등급컷</StyledText>
                        <Input></Input>
                        <StyledText>내 등급</StyledText>
                        <Input></Input>
                    </LevelContainer>
                </RowContainer>
                <StyledText >나의 맞춤 강의</StyledText>
                <FlatList horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={lectureItem}
                    renderItem={({ item }) => <LectureItem item={item} />}
                >
                    <LectureItem
                        title="고산하의 으라차차"
                    />
                    <LectureItem
                        title="ss" />
                    <LectureItem
                        title="ss" />


                </FlatList>
                <RowContainer></RowContainer>
                <StyledText>맞춤 강의 OOO</StyledText>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                </ScrollView>
                <RowContainer></RowContainer>
                <StyledText>맞춤 강의 OOO</StyledText>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}>
                        <LectureContainer>
                            <Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} />
                            <MonthText></MonthText></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 200, margin: 20 }} /></LectureContainer></TouchableOpacity>
                </ScrollView>
                <RowContainer></RowContainer>
                <StyledText>맞춤 강의 OOO</StyledText>

            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Lecture;