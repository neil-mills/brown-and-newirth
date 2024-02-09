import fetchData from '@/data/fetchData'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { SearchByCategory } from '@/app/components'

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: fetchData,
  })

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <h1>Search</h1>
        <SearchByCategory />
      </HydrationBoundary>
    </main>
  )
}
