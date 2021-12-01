import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Image, Input } from '../components';
import { Alert, Dimensions } from 'react-native';
import Navigation from '../navigations';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native'


const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
align-items: center;
justify-content: center;
`;

const LectureContainer = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};

`;

const VideoContainer = styled.View`
flex : 1;
`;
const StyledText = styled.Text`
font-size : 24px;
font-weight: bold;
`;
const RowContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
border-bottom-width : 1px;
border-color : ${({ theme }) => theme.imgBtnBackground};
padding : 0 20px;
`;
const IntroduceContainer = styled.View`
width : 80%;
padding-top : 20px;
padding-bottom : 10px;
margin-bottom : 20px;
border-bottom-width : 1px;
border-color : ${({ theme }) => theme.imgBtnBackground};
`;
const IconText = styled.Text`
font-size : 16px;
color : ${({ theme }) => theme.main};
`;
const LectureClick = ({ navigation }) => {
    const theme = useContext(ThemeContext)
    return (
        <KeyboardAwareScrollView style={{ margin: 20 }}>
            <Container style={{ margin: 20 }}>
                <VideoContainer>
                    <Image style={{ borderRadius: 0, width: Dimensions.get('window').width, height: 300, margin: 10 }} />
                </VideoContainer>
                <StyledText>고산하의 으라차차 문법 부수기</StyledText>

                <Button title="링크 바로가기"
                    onPress={() => { console.log("링크") }}
                    containerStyle={{ marginBottom: 30, marginLeft: 60, marginRight: 60 }} />
                <RowContainer style={{ paddingBottom: 20 }}>

                    <Container>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="add"
                                size={40}
                                color={theme.main}
                                style={{ marginLeft: 20, marginRight: 20 }}

                            />
                            <IconText>강의 바구니</IconText>
                        </TouchableOpacity>
                    </Container>
                    <Container>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="rate-review"
                                size={40}
                                color={theme.main}
                                style={{ marginLeft: 13, marginRight: 20 }}
                            />
                            <IconText>평가 하기</IconText>
                        </TouchableOpacity>
                    </Container>
                    <Container>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="ios-share"
                                size={40}
                                color={theme.main}
                                style={{ marginLeft: 10, marginRight: 20 }}
                            />
                            <IconText>공유 하기</IconText>
                        </TouchableOpacity>
                    </Container>

                </RowContainer>
                <IntroduceContainer>
                    <StyledText style={{ marginBottom: 5 }}>강의 소개</StyledText>
                    <StyledText style={{ fontWeight: "normal", fontSize: 16 }}>영어 울렁증 마저 극복시켜주는 자칭 해외파 고산하 선생! 흥 넘치는 고산하의 수업과 중간중간 잠을 깨워주는 노래 교실과 함께 우리함께 원어민이 되어보자!!</StyledText>
                </IntroduceContainer>
                <IntroduceContainer>
                    <StyledText>강의평</StyledText>
                    <Input placeholder="강의평을 입력하세요." />
                    <Button title="등록" containerStyle={{}} onPress={() => console.log("등록")} />
                </IntroduceContainer>

                <StyledText>비슷한 강좌 컨텐츠</StyledText>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("LectureClick") }}><LectureContainer><Image style={{ borderRadius: 0, width: 100, height: 100, margin: 20 }} /></LectureContainer></TouchableOpacity>

                </ScrollView>
            </Container>
        </KeyboardAwareScrollView >
    )
}

export default LectureClick;