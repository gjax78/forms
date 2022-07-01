import React from "react";
import ItemCard from '../ItemCard/ItemCard'

const Items = ({items}) => {
  const allItems = items.map(item => {
    return (
      <ItemCard 
        title={item.title}
        // image={item.image}
        // price={item.price}
        // description={item.description}
        // rating={item.rating.rate}
      />
    )
  })

  return (
    <div className='item-container'>
      {allItems}
    </div>
  )
}

export default Items;