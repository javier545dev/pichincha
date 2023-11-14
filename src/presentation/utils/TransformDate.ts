export default function TransformDate(date: Date) {
  if (!date || !(date instanceof Date)) {
    return "Fecha no válida"
  }
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()
  return `${year}/${month}/${day}`
}
