import { sizes } from "@src/presentation/theme/Styles"
import { StyleSheet } from "react-native"

const ProductCreateStyles = StyleSheet.create({
  container: {
    gap: 8,
    paddingTop: 30,
    width: "100%",
    paddingHorizontal: 30,
  },
  section: {
    width: "100%",
    flexGrow: 1,
    gap: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: sizes.xxl,
    fontWeight: "bold",
    paddingBottom: 20,
    fontFamily: "Times New Roman",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 5,
    gap: 10,
  },
})

export default ProductCreateStyles
