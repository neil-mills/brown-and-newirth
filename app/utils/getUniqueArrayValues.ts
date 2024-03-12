export const getUniqueArrayValues = (values: string[] | undefined) => {
  if (!values || typeof values !== 'object') return []
  return Array.from(new Set(values))
}
