import React from "react"
import { Modal, Pressable, StyleSheet } from "react-native"
import DatePick from "../pickers/DatePicker"
import { colors, sizes } from "@src/presentation/theme/Styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Icon from "react-native-vector-icons/Entypo"

interface Props {
  visible: boolean
  transparent?: boolean
  animationType?: "slide" | "fade" | "none"
  onRequestClose: () => void
  onChange: (dateString: string) => void
  current: Date
}

export default function ModalDatePicker({
  visible,
  transparent = true,
  animationType = "slide",
  onRequestClose,
  onChange,
  current,
}: Props) {
  const { bottom } = useSafeAreaInsets()
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onRequestClose}
      onMagicTap={onRequestClose}>
      <Pressable onPress={onRequestClose} style={styles.container}>
        <DatePick onChange={onChange} current={current} />
        <Pressable
          style={[
            styles.button,
            {
              bottom: bottom + 20,
            },
          ]}
          onPress={onRequestClose}>
          <Icon name="cross" size={sizes.xxl} color={colors.darkGray} />
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: colors.opacity75,
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.darkGray,
  },
})
