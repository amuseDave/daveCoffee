export function priceFormatter(priceCents) {
  const local = navigator.language;
  const price = (priceCents / 100).toFixed(2);

  return new Intl.NumberFormat(local, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
