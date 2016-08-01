export function getFormattedDate(dateString) {
  return new Date(dateString * 1000).toISOString().slice(0, 10);
}
