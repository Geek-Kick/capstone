import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
font-size : 30px;
`;

const channels = [];
for (let i = 0; i < 1000; i++) {
    channels.push({
        id: i, title: `게시글 ${i}`
        , description: `desc : ${i}`,
        createAt: i,
    });
}

const ItemContainer = styled.TouchableOpacity`
flex-direction : row ;
align-items:center;
border-bottom-width : 1px;
border-color : ${({ theme }) => theme.itemBorder};
padding : 15px 20px;
`;

const ItemTextContainer = styled.View`
flex : 1;
flex-direction : column;

`;

const ItemTitle = styled.Text`
font-size : 20px;
font-weight : 600;

`

const ItemDesc = styled.Text`
font-size : 16px;
font-weight : 600;
`;

const ItemTime = styled.Text`
font-size : 12px;
color : ${({ theme }) => theme.ItemDesc};
`;

const ItemIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    name: 'keyboard-arrow-right',
    size: 24,
    color: theme.itemIcon,
}))``;

const Item = ({ item: { id, title, description, createdAt }, onPress }) => {
    console.log(id);

    return (
        <ItemContainer>
            <ItemTextContainer>
                <ItemTitle>{title}</ItemTitle>
                <ItemDesc>{description}</ItemDesc>
            </ItemTextContainer>
            <ItemIcon />
        </ItemContainer>
    );
}

const Community = () => {
    return (
        <Container>
            <FlatList
                data={channels}
                renderItem={({ item }) => <Item item={item} />}
            />
        </Container>
    )
}

export default Community;