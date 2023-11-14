import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { colors } from "@presentation/theme/Styles"
import Logo from "@presentation/components/Logo"

export default function Home({ children, testID }: { children: ReactNode; testID?: string }) {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <View
      testID={testID}
      style={[
        styles.container,
        {
          paddingTop: top,
          paddingBottom: bottom,
          backgroundColor: colors.white,
        },
      ]}>
      <Logo />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
})
