import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  showAllLink: {
    fontSize: 18,
    color: "#eda71c",
  },
  noFavoriteMeals: {
    textAlign: "center",
  },
  favoriteCardWrapper: {
    marginRight: 10,
  },
  favoriteCard: {
    borderRadius: 8,
    overflow: "hidden",
    width: 150,
    alignItems: "center",
  },
  favoriteImage: {
    width: 90,
    height: 90,
    borderRadius: "50%",
  },
  favoriteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
    textAlign: "center",
  },
  flatListContainer: {
    paddingLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default styles
