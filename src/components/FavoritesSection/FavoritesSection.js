import React, { useState, useEffect, useCallback } from "react"
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import { fetchFavorites } from "../../services/api"
import { useNavigation } from "@react-navigation/native"
import { useFocusEffect } from "@react-navigation/native"

import styles from "./favoritesSection.style"

const FavoritesSection = () => {
  const navigation = useNavigation()
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

  const handleMealPress = (mealId) => {
    navigation.navigate("MealDetails", { mealId })
  }

  const handleShowAllPress = () => {
    navigation.navigate("Favorites")
  }

  const renderFavoriteCard = ({ item }) => (
    <TouchableOpacity
      style={styles.favoriteCardWrapper}
      onPress={() => handleMealPress(item.idMeal)}
    >
      <View style={styles.favoriteCard}>
        <Image
          source={{ uri: item.strMealThumb }}
          style={styles.favoriteImage}
        />
        <Text
          style={styles.favoriteTitle}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.strMeal}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Favorites</Text>
        <TouchableOpacity onPress={handleShowAllPress}>
          <Text style={styles.showAllLink}>Show All</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#eda71c"
          style={styles.loadingIndicator}
        />
      )}

      {favorites.length === 0 && (
        <Text style={styles.noFavoriteMeals}>No favorite meals yet!</Text>
      )}

      <FlatList
        data={favorites.slice(0, 5)}
        keyExtractor={(item, index) => `${item.idMeal}_${index}`}
        renderItem={renderFavoriteCard}
        horizontal
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default FavoritesSection
