import axios from "axios"

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

export default api
