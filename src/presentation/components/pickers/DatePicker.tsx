import React from "react"
import { StyleSheet } from "react-native"
import DatePicker from "react-native-modern-datepicker"
import { TransformDateWithYearString } from "@presentation/utils/TransformDateWithYear"

interface Props {
  onChange: (dateString: string) => void
  current: Date
}

export default function DatePick({ onChange, current }: Props) {
  const today = TransformDateWithYearString(new Date())
  return (
    <DatePicker
      style={styles.picker}
      mode="calendar"
      minimumDate={today}
      selected={TransformDateWithYearString(current)}
      current={today}
      onDateChange={onChange}
    />
  )
}

const styles = StyleSheet.create({
  picker: {
    width: "100%",
    borderRadius: 20,
  },
})
