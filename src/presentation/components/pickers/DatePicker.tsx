import React from "react"
import { StyleSheet } from "react-native"
import DatePicker, { getFormatedDate, getToday } from "react-native-modern-datepicker"

interface Props {
  onChange: (dateString: string) => void
  current: Date
}

export default function DatePick({ onChange, current }: Props) {
  const today = getToday()
  const currentDay = getFormatedDate(new Date(current))
  return (
    <DatePicker
      style={styles.picker}
      mode="calendar"
      minimumDate={today}
      selected={getFormatedDate(current)}
      current={currentDay}
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
