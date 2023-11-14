export default function TransformDateWithYear(date: Date, years: number): Date {
  const datenew = new Date(date)
  datenew.setFullYear(datenew.getFullYear() + years)
  return datenew
}

export function TransformDateWithYearString(date: Date): string {
  const datenew = new Date(date)
  return datenew?.toLocaleDateString().split("/").reverse().join("/")
}
