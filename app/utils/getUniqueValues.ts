export const getUniqueValues = (values: string[] | undefined) => {
  if (!values || typeof values !== 'object') return []
  return Array.from(new Set(values))
}
