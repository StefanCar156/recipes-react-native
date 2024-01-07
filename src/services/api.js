import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
})

export const getMealById = async (mealId) => {
  try {
    const response = await api.get(`/lookup.php`, {
      params: {
        i: mealId,
      },
    })
    return response.data.meals[0]
  } catch (error) {
    console.error("Error fetching meal details:", error)
    throw error
  }
}

export const searchMealsByName = async (mealName) => {
  try {
    const response = await api.get(`/search.php`, {
      params: {
        s: mealName,
      },
    })
    return response.data.meals || []
  } catch (error) {
    console.error("Error searching meals by name:", error)
    throw error
  }
}

export const getFeaturedMeals = async (count) => {
  try {
    const mealPromises = Array.from({ length: count }, () =>
      api.get("/random.php")
    )

    const responses = await Promise.all(mealPromises)

    const meals = responses.map((response) => response.data.meals[0])

    return meals
  } catch (error) {
    console.error("Error fetching featured meals:", error)
    throw error
  }
}

export const getCategories = async () => {
  try {
    const response = await api.get("/categories.php")

    return response.data.categories || []
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
}

export const getMealsByCategory = async (category) => {
  try {
    const response = await api.get("/filter.php", {
      params: {
        c: category,
      },
    })
    return response.data.meals || []
  } catch (error) {
    console.error("Error fetching meals by category:", error)
    throw error
  }
}

export const fetchFavorites = async () => {
  try {
    const storedFavorites = await AsyncStorage.getItem("favorites")

    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites)

      const favoritesWithDetails = await Promise.all(
        parsedFavorites.map(async (mealId) => await getMealById(mealId))
      )
      return favoritesWithDetails
    }
    return []
  } catch (error) {
    console.error("Error fetching favorites:", error)
    throw error
  }
}

export const toggleMealInFavorites = async (mealId) => {
  try {
    let favoritesRes = await AsyncStorage.getItem("favorites")
    let favorites = JSON.parse(favoritesRes) || []

    const isFavorite = favorites.includes(mealId)

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== mealId)
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    } else {
      const updatedFavorites = [...favorites, mealId]
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }
  } catch (error) {
    console.error("Error toggling meal in favorites:", error)
    throw error
  }
}

export default api
