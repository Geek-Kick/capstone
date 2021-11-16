import React, { useEffect } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { MaterialIcons } from '@expo/vector-icons'
import { theme } from "../theme";
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Container = styled.View`
margin-bottom : 30px;

`;

const ButtonContainer = styled.TouchableOpacity`
background-color : ${({ theme }) => theme.imgBtnBackground};
position : absolute;
bottom : 0;
right : 0;
width : 30px;
height : 30px;
border-radius: 15px;
justify-content: center;
align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    name: 'photo-camera',
    size: 22,
    color: theme.imgBtnIcon,
}))`
`;

const PhotoButton = ({ onPress }) => {
    return (<ButtonContainer onPress={onPress}>
        <ButtonIcon /></ButtonContainer>
    );
}

const ProfileImage = styled.Image`
background-color: ${({ theme }) => theme.imgBackground};
width : 200px;
height : 200px;
border-radius: 100px;
`;

const Image = ({ url, showButton, onChangePhoto, style }) => {
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Photo Permission', '카메라 접근 권한을 허용해주세요..!');
                }
            }
        })();
    }, []);

    const _handlePhotBtnPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            onChangePhoto(result.uri);
        }
    };
    return <Container>
        <ProfileImage style={style} source={{ uri: url }} />
        {showButton && <PhotoButton onPress={_handlePhotBtnPress} />}
    </Container>
};


Image.propTypes = {
    url: PropTypes.string,
    showButton: PropTypes.bool,
    onChangePhoto: PropTypes.func,
}

export default Image;