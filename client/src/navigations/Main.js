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
  SchoolRanking,
  QuizMain,
  QuizDetail,
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
      <Stack.Screen name="Home" options={{ title: "ALFY" }} component={Home} />
      <Stack.Screen name="RankingList" component={RankingList} />
      <Stack.Screen
        name="MyRanking"
        options={{ title: "랭킹" }}
        component={MyRanking}
      />
      <Stack.Screen name="PersonalRanking" component={PersonalRanking} />
      <Stack.Screen
        name="Lecture"
        options={{ title: "강의" }}
        component={Lecture}
      />
      <Stack.Screen
        name="LectureClick"
        options={{ title: "강의 소개" }}
        component={LectureClick}
      />
      <Stack.Screen name="Quiz" options={{ title: "퀴즈" }} component={Quiz} />
      <Stack.Screen
        name="Signin"
        options={{ title: "로그인" }}
        component={Signin}
      />
      <Stack.Screen
        name="SchoolRanking"
        options={{ title: "학교 내 나의 랭킹" }}
        component={SchoolRanking}
      />
      <Stack.Screen
        name="QuizMain"
        options={{ title: "문제" }}
        component={QuizMain}
      />
      <Stack.Screen
        name="QuizDetail"
        options={{ title: "퀴즈" }}
        component={QuizDetail}
      />
    </Stack.Navigator>
  );
};

export default Main;
