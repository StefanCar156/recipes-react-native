import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"

import styles from "./mealCard.style"
import { toggleMealInFavorites } from "../../services/api"

const MealCard = ({ meal }) => {
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    checkIsFavorite()
  }, [])

  const checkIsFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites")
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites)
        setIsFavorite(parsedFavorites.includes(meal.idMeal))
      }
    } catch (error) {
      console.error("Error checking favorite status:", error)
    }
  }

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const favoritesIDs = await AsyncStorage.getItem("favorites")
        const isMealFavorite =
          favoritesIDs && favoritesIDs.includes(meal.idMeal)
        setIsFavorite(isMealFavorite)
      } catch (error) {
        console.error("Error checking if meal is a favorite:", error)
      }
    }

    if (meal) checkIfFavorite()
  }, [meal, isFavorite])

  const toggleFavorite = async () => {
    try {
      await toggleMealInFavorites(meal.idMeal)
      setIsFavorite((prev) => !prev)
    } catch (error) {
      console.error("Error toggling favorite:", error)
    }
  }

  const handleMealPress = () => {
    navigation.navigate("MealDetails", { mealId: meal.idMeal })
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleMealPress}>
      <View style={styles.card}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          <FontAwesomeIcon
            name={isFavorite ? "heart" : "heart-o"}
            size={20}
            color="red"
          />
        </TouchableOpacity>
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
