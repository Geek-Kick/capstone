import React, { useContext } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';

const Container = styled.View`
flex : 1;
background-color : ${({ theme }) => theme.background};
justify-content: space-between;
align-items: center;
padding : 0 20px;
`;

const RowContainer = styled.View`
flex-direction: row;
justify-content : center;
align-items: center;

`;

const StyledText = styled.Text`
font-size : 24px;
`;
const Profile = ({ navigation, route }) => {
    const { setUser } = useContext(UserContext);

    console.log(route.params);
    return <Container>
        <RowContainer>
            <Input label="사용자 이름" value="박상호" style={{ width: 300, height: 60 }} /><Image style={{ width: 100, height: 100, marginTop: 20 }} />
        </RowContainer>

        <Button title="로그아웃"
            onPress={() => setUser({})} />
    </Container>
}

export default Profile;