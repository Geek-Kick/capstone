import React from "react";
import styled from "styled-components/native";
import { icons } from "../icons"
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Container = styled.View`
flex-direction: row;
width : 100%;
padding-top : 10px;
padding-bottom : 10px;
`;

const Ment = styled.Text`
font-size : 15px;
color : ${({ theme }) => theme.text};
margin-top : 5px;
`;

const CheckBox = styled.Image`
width : 30px;
height : 30px;
margin-right : 5px;
tint-color : #111;
`;

const Adv = ({ ment, source, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
            <Container>
                <CheckBox source={source} />
                <Ment>{ment}</Ment>
            </Container>
        </TouchableOpacity>
    );
};

Adv.propTypes = {
    ment: PropTypes.string.isRequired,
}

export default Adv;