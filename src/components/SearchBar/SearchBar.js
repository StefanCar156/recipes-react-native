import { useState, useCallback } from "react"
import { View, TextInput, TouchableOpacity } from "react-native"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome"

import styles from "./searchBar.style"

const SearchBar = () => {
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return

    navigation.navigate("SearchResults", { searchQuery })
  }

  useFocusEffect(
    useCallback(() => {
      setSearchQuery("")
    }, [])
  )
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search meals"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
        style={styles.searchInput}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar
