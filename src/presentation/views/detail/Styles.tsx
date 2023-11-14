import { StyleSheet } from "react-native"

const ProductDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 40,
    paddingTop: 40,
    gap: 50,
  },
  body: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
    flex: 1,
    gap: 20,
  },
  footer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    gap: 10,
  },
})

export default ProductDetailStyles
