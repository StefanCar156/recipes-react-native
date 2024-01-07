import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.5,
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  titleContainer: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  favoriteButton: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#fff",
    padding: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
})

export default styles
