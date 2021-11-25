import React, { useContext } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';

const Container = styled.View`
flex : 1;
background-color : ${({ theme }) => theme.background};
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

const LvText = styled.Text`
font-size : 12px;
font-weight: bold;
`;

const StyledText = styled.Text`
font-size : 24px;
font-weight: bold;
margin-bottom: 10px;
`;

const Profile = ({ navigation, route }) => {
    const { setUser } = useContext(UserContext);

    console.log(route.params);
    return <Container>
        <RowContainer>
            <ColumnContainer>
                <Input label="사용자 이름" value="박상호" containerStyle={{ height: 10 }} style={{ width: 300, height: 55 }} />
                <LvText>Lv.01 브론즈</LvText>
                <Button title="정보수정 >" onPress={() => { }}
                    containerStyle={{ backgroundColor: '#a6a6a6', width: 20, height: 30 }}
                    textStyle={{ fontSize: 10 }} />
            </ColumnContainer>

            <Image style={{ width: 130, height: 130, marginTop: 20 }} />

        </RowContainer>
        <Button title="Main" containerStyle={{ flex: 1, width: 20 }} />
        <StyledText>수강중인 강좌</StyledText>
        <RowContainer>
            <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
            <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
            <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
            <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
            <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
            <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
        </RowContainer>
        <StyledText>나의 커뮤니티 활동</StyledText>
        <RowContainer>
            <Image style={{ borderRadius: 0, width: 100, height: 100, marginRight: 30 }} />
            <Input label="최근 게시글" value="--------------------" containerStyle={{ height: 10, }} style={{ width: 300, height: 55 }} />
        </RowContainer>
        <StyledText>나의 랭킹</StyledText>
        <RowContainer>
            <Image style={{ borderRadius: 0, width: 100, height: 100 }} />
        </RowContainer>
        <StyledText>나의 퀴즈</StyledText>
        <RowContainer>
            <Image style={{ width: 100, height: 100 }} /><Image style={{ width: 100, height: 100 }} /><Image style={{ width: 100, height: 100 }} />
        </RowContainer>

    </Container>

}

export default Profile;