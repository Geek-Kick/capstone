import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, Ranking, Lecture, Quiz } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeConstext, ThemeContext } from 'styled-components/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const TabIcon = ({ name, focused }) => {
    const theme = useContext(ThemeContext);
    return <MaterialIcons name={name} size={26}
        color={focused ? theme.tabBtnActive : theme.tabBtnInactive}
    />
}

const Tab = createBottomTabNavigator();

const Home = ({ navigation, route }) => {
    useEffect(() => {
        const screenName = getFocusedRouteNameFromRoute(route) || 'ALFY';
        navigation.setOptions({
            headerTitle: screenName
        });
    })
    return (
        <Tab.Navigator>
            <Tab.Screen name="랭킹" component={Ranking} options={{
                tabBarActiveTintColor: '#8E75F9',
                tabBarIcon: ({ focused }) => (TabIcon({ name: focused ? 'insert-chart' : 'insert-chart-outlined', focused }))
            }} />
            <Tab.Screen name="퀴즈" component={Quiz}
                options={{
                    tabBarActiveTintColor: '#8E75F9',
                    tabBarIcon: ({ focused }) => (TabIcon({ name: focused ? 'book' : 'book', focused }))
                }}
            />
            <Tab.Screen name="강의" component={Lecture}
                options={{
                    tabBarActiveTintColor: '#8E75F9',
                    tabBarIcon: ({ focused }) => (TabIcon({ name: focused ? 'laptop-chromebook' : 'laptop-chromebook', focused }))
                }}
            />
            <Tab.Screen name="마이페이지" component={Profile}
                options={{
                    tabBarActiveTintColor: '#8E75F9',
                    tabBarIcon: ({ focused }) => (TabIcon({ name: focused ? 'person' : 'person-outline', focused }))
                }}
            />
        </Tab.Navigator>
    )
}

export default Home;