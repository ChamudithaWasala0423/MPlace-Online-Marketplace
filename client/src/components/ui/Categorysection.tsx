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

    </section>
  )
}

export default Categorysection