export function formatPersianNumber(number: number): string {
  return new Intl.NumberFormat("fa-IR").format(number)
}
