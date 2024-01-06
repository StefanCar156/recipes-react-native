import React, { useState, useEffect } from "react"
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native"
import { getCategories } from "../../services/api"
import { useNavigation } from "@react-navigation/native"

import styles from "./categories.style"

const Categories = () => {
  const navigation = useNavigation()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories()
        setCategories(categories)
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const handleCategoryPress = (category) => {
    navigation.navigate("SearchResults", { searchCategory: category })
  }

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryWrapper}
      onPress={() => handleCategoryPress(item.strCategory)}
    >
      <View style={styles.categoryCard}>
        <Text style={styles.categoryText}>{item.strCategory}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#eda71c"
          style={styles.loadingIndicator}
        />
      )}

      <FlatList
        data={categories}
        keyExtractor={(item) => item.strCategory}
        renderItem={renderCategory}
        numColumns={4}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}

export default Categories
