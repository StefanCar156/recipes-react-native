import React, { useState, useEffect, useLayoutEffect } from "react"
import { View, FlatList, ActivityIndicator, Text } from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native"
import { searchMealsByName, getMealsByCategory } from "../../services/api"
import MealCard from "../../components/MealCard/MealCard"

import styles from "./searchResultsScreen.style"

const SearchResultsScreen = () => {
  const route = useRoute()
  const searchQuery = route.params?.searchQuery || ""
  const searchCategory = route.params?.searchCategory || ""
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        let results

        if (searchQuery) {
          results = await searchMealsByName(searchQuery)
        } else if (searchCategory) {
          results = await getMealsByCategory(searchCategory)
        }

        setSearchResults(results)
      } catch (error) {
        console.error("Error fetching search results:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSearchResults()
  }, [searchQuery, searchCategory])

  useLayoutEffect(() => {
    const { params } = route

    if (params && (params.searchQuery || params.searchCategory)) {
      navigation.setOptions({
        title: `Search results for "${
          params.searchQuery || params.searchCategory
        }"`,
      })
    }
  }, [route, navigation])

  const renderMealCard = ({ item }) => <MealCard meal={item} />

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  if (searchResults.length === 0) {
    return (
      <View style={styles.noResultsContainer}>
        <Text>No results found for "{searchQuery}"</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderMealCard}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default SearchResultsScreen
