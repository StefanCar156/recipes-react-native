import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import styles from "./mealCard.style"

const MealCard = ({ meal }) => {
  const navigation = useNavigation()

  const handleMealPress = () => {
    navigation.navigate("MealDetails", { mealId: meal.idMeal })
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleMealPress}>
      <View style={styles.card}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {meal.strMeal}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MealCard
