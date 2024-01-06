import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 5,
  },
  searchButton: {
    backgroundColor: "#eda71c",
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
})

export default styles
