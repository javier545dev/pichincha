import { colors } from "@src/presentation/theme/Styles"
import React from "react"
import { RefreshControl } from "react-native"

interface Props {
  refreshing: boolean
  onRefresh: () => void
}

export default function RefreshController({ refreshing, onRefresh, ...props }: Props) {
  return (
    <RefreshControl
      onRefresh={onRefresh}
      refreshing={refreshing}
      tintColor={colors.darkGray}
      {...props}
    />
  )
}
