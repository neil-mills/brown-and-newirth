export const formatCarat = (carat: string) => {
  return carat.replace('-', '.').substring(0, 4)
}
