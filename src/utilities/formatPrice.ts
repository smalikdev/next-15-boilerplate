export function formatPrice(price: string) {
  // Create an instance of Intl.NumberFormat for formatting numbers
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal", // This can be 'currency' if you want to format it as currency
    maximumFractionDigits: 0, // No decimal places
  })

  // Format and return the price
  return formatter.format(Number(price))
}
