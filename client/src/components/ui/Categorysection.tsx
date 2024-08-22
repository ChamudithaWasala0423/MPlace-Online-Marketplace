import React from 'react'
import Categorycard from './Categorycard'

type Category={
    id: number;
    name: string;
    icon: string;
}

type Props={
    categories:Category[];
}
const Categorysection:React.FC<Props> = ({categories}) => {
  return (
    <div>Categorysection</div>
  )
}

export default Categorysection