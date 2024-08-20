import React from 'react'
type ItemcardProps = {
    name: string;
    description: string;
    price: string;
    location: string;
    daysAdded: number;
    itemImage: string;
  }
  

const Itemcard = ({name,description,price,location,daysAdded,itemImage}:ItemcardProps) => {
  return (
    <div>Itemcard</div>
  )
}

export default Itemcard