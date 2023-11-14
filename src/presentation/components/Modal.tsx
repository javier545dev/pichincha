import React, { ReactNode } from "react"
import { View, Modal, Text, StyleSheet, ScrollView, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors, sizes } from "@presentation/theme/Styles"

import Separator from "@presentation/components/Separator"

interface Props {
  visible: boolean
  transparent: boolean
  animationType: "slide" | "fade" | "none"
  title: string
  onRequestClose: () => void
  children: ReactNode
}

export default function ModalWithText({
  visible,
  transparent,
  animationType,
  title,
  onRequestClose,
  children,
}: Props) {
  const { bottom } = useSafeAreaInsets()
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onRequestClose}
      onMagicTap={onRequestClose}>
      <Pressable style={styles.container} onPress={onRequestClose}>
        <View
          style={[
            styles.modal,
            {
              paddingBottom: bottom,
            },
          ]}>
          <View style={styles.header}>
            <Pressable onPress={onRequestClose} style={styles.close}>
              <Text>X</Text>
            </Pressable>
            <Separator />
          </View>
          <ScrollView contentContainerStyle={styles.body} bounces={false}>
            <Text style={styles.title}>{title}</Text>
          </ScrollView>
          <Separator />
          <View style={styles.section}>{children}</View>
        </View>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: colors.opacity75,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    gap: 10,
  },
  close: {
    paddingRight: 20,
  },
  header: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    paddingVertical: 10,
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    paddingHorizontal: 20,
  },
  body: {
    flexGrow: 1,
    paddingVertical: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: sizes.md,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    textAlign: "center",
  },
})
