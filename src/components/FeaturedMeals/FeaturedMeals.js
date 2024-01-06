import React, { useState, useEffect } from "react"
import { FlatList, View, Text, ActivityIndicator } from "react-native"
import { getFeaturedMeals } from "../../services/api"
import MealCard from "../../components/MealCard/MealCard"

import styles from "./featuredMeals.style"

const FeaturedMeals = () => {
  const [featuredMeals, setFeaturedMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedMeals = async () => {
      try {
        const meals = await getFeaturedMeals(8)
        setFeaturedMeals(meals)
      } catch (error) {
        console.error("Error fetching featured meals:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedMeals()
  }, [])

  const renderMealCard = ({ item }) => <MealCard meal={item} />

  return (
    <View style={styles.featuredMealsContainer}>
      <Text style={styles.featuredMealsTitle}>Featured Meals</Text>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#eda71c"
          style={styles.loadingIndicator}
        />
      )}

      <FlatList
        data={featuredMeals}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderMealCard}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FeaturedMeals
