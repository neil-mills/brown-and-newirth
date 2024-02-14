'use client'
import { FormEvent, useRef } from 'react'
import { useGetData } from '../hooks'
import { useRouter } from 'next/navigation'
export const SearchByCode = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { data: products, error, isLoading } = useGetData()
  const router = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const code = inputRef?.current?.value
    if (code) {
      const product = products?.find(
        (product) => product.productId === parseInt(code)
      )
      if (product) {
        router.push(`/products/${code}`)
      }
    }
  }

  if (isLoading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>
  return (
    <section>
      <h3>Search by code</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Search</button>
      </form>
    </section>
  )
}
