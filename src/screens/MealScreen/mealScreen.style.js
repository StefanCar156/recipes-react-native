import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    marginTop: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    alignSelf: "center",
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "left",
  },
  ingredientsListItem: {
    fontSize: 16,
    textAlign: "left",
    marginVertical: 4,
  },
  instructions: {
    fontSize: 16,
    marginTop: 8,
  },
  favoriteButton: {
    backgroundColor: "#eda71c",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  favoriteButtonText: {
    color: "#fff",
    textAlign: "center",
  },
})

export default styles
