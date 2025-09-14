import Pageheader from '@/components/sections/Pageheader'
import Productgrid from '@/components/sections/Productgrid'
import Features from '@/components/sections/Features'
import Gallery from '@/components/sections/Gallery'

export default function ProductCatalogPage() {
  return (
    <>
      <Pageheader />
      <Productgrid />
      <Features />
      <Gallery />
    </>
  )
}