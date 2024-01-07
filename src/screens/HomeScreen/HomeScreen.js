import { View, ScrollView } from "react-native"
import SearchBar from "../../components/SearchBar/SearchBar"
import Categories from "../../components/Categories/Categories"
import FeaturedMeals from "../../components/FeaturedMeals/FeaturedMeals"
import FavoritesSection from "../../components/FavoritesSection/FavoritesSection"

import styles from "./homeScreen.style"

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SearchBar />
        <Categories />
        <FavoritesSection />
        <FeaturedMeals />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
