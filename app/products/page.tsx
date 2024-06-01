import { ProductItem } from "@/components/ProductItem"
import productItems from "@/data/items.json"

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productItems.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  )
}
