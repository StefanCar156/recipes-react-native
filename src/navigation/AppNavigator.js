import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen/HomeScreen"
import MealScreen from "../screens/MealScreen/MealScreen"
import SearchResultsScreen from "../screens/SearchResultsScreen/SearchResultsScreen"

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="MealDetails"
          options={{ headerTitle: "" }}
          component={MealScreen}
        />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
