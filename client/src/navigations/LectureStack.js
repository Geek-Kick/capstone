import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Lecture, LectureClick, Profile } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const LectureStack = () => {
    const theme = useContext(ThemeContext)
    return <Stack.Navigator screenOptions={
        { cardStyle: { backgroundColor: theme.background } }
    }>
        <Stack.Screen name='Lecture' component={Lecture} options={{
            headerShown: false
        }} />
        <Stack.Screen name='LectureClick' component={LectureClick} options={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerTintColor: theme.main,
            headerLeft: ({ onPress, tintColor }) => (<MaterialIcons
                name="keyboard-arrow-left"
                size={30}
                color={tintColor}
                onPress={onPress}
            />)
        }} />


    </Stack.Navigator>
}

export default LectureStack;