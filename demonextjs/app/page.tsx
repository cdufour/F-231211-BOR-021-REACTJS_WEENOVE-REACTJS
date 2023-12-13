import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Demo Nextjs</h1>
      {/*<a href="users">Users</a>*/}
      <Link href="users">Users</Link>
      <ProductCard />
    </main>
  )
}
