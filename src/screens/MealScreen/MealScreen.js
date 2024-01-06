import React, { useEffect, useState } from "react"
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native"
import { useRoute } from "@react-navigation/native"
import { getMealById } from "../../services/api"

import styles from "./mealScreen.style"

const MealScreen = () => {
  const route = useRoute()
  const [meal, setMeal] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const mealId = route.params.mealId
        const meal = await getMealById(mealId)
        setMeal(meal)
      } catch (error) {
        console.error("Error fetching meal details:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMealDetails()
  }, [route.params.mealId])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#eda71c"
          style={styles.loadingIndicator}
        />
      </View>
    )
  }

  if (!meal) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error fetching meal details</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{meal.strMeal}</Text>
              <Text style={styles.category}>{meal.strCategory}</Text>
              <Text style={styles.sectionTitle}>Ingredients:</Text>
            </View>
          </>
        }
        data={getIngredientsList(meal)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.ingredientsListItem}>• {item}</Text>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <>
            <Text style={styles.sectionTitle}>Instructions:</Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
          </>
        }
      />
    </View>
  )
}

const getIngredientsList = (meal) => {
  const ingredientsList = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ingredient && measure) {
      ingredientsList.push(`${measure} ${ingredient}`)
    }
  }
  return ingredientsList
}

export default MealScreen
