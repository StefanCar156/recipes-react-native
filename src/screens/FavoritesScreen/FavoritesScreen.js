import React, { useCallback, useState } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { fetchFavorites } from "../../services/api"
import MealCard from "../../components/MealCard/MealCard"

import styles from "./favoritesScreen.style"
import { useFocusEffect } from "@react-navigation/native"

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      fetchFavoritesData()
      return () => {}
    }, [])
  )

  const fetchFavoritesData = async () => {
    try {
      const favoritesFromStorage = await fetchFavorites()
      setFavorites(favoritesFromStorage)
    } catch (error) {
      console.error("Error fetching favorites:", error)
    } finally {
      setLoading(false)
    }
  }

  const renderFavoriteCard = ({ item }) => <MealCard meal={item} />

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#eda71c" />
      </View>
    )
  }

  if (favorites.length === 0) {
    return (
      <View style={styles.noFavoritesContainer}>
        <Text>No favorite meals yet!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderFavoriteCard}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FavoritesScreen
