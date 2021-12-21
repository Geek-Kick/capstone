import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Profile,
  Ranking,
  RankingList,
  MyRanking,
  PersonalRanking,
  Lecture,
  Quiz,
  LectureClick,
  Signin,
  QuizMain,
} from "../screens";
import Home from "./Home";

const Stack = createStackNavigator();

const Main = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: theme.main,
        headerBackTitleVisible: true,
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RankingList" component={RankingList} />
      <Stack.Screen name="MyRanking" component={MyRanking} />
      <Stack.Screen name="PersonalRanking" component={PersonalRanking} />
      <Stack.Screen name="Lecture" component={Lecture} />
      <Stack.Screen name="LectureClick" component={LectureClick} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="QuizMain" component={QuizMain} />
    </Stack.Navigator>
  );
};

export default Main;
