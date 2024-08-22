import React from 'react'
import Categorycard from './Categorycard'

type Category={
    id?: number;
    name?: string;
    icon?: string;
}

type Props={
    categories?:Category[];
}

const defaultCategories: Category[] = [
    { id: 1, name: 'Electronics', icon: '/images/electronincs.png' },
    { id: 2, name: 'Electronics', icon: '/images/electronincs.png' },
    { id: 3, name: 'Electronics', icon: '/images/electronincs.png' },
];

const Categorysection:React.FC<Props> = ({categories}) => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center text-black">Categories</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default Categorysection