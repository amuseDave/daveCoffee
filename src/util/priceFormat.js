export function priceFormatter(price) {
  const local = navigator.language;

  return new Intl.NumberFormat(local, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
