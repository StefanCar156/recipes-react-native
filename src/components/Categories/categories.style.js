import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  categoryWrapper: {
    marginBottom: 10,
    marginRight: 10,
  },
  categoryCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingIndicator: {
    marginTop: 20,
  },
  allCategoriesLink: {
    textAlign: "center",
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
})

export default styles
