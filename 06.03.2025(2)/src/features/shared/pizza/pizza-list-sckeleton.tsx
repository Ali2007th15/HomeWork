export default function PizzaListSkeleton() {
    return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 rounded-lg p-4 h-80"></div>
          ))}
        </div>
      </div>
    )
  }
  
  