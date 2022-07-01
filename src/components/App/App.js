import './App.css';
import Form from '../Form/Form'
import Items from '../Items/Items'
import React, {useState, useEffect} from 'react';
import data from '../../util/data'

const App = () => {
  const [items, setItems] = useState([])
  // const [search, setSearch] = useState('')
  const [formComplete, setFormComplete] = useState('')

  const displayItems = () => {
    setItems(data)
  }

  useEffect(() => {
    displayItems()
  }, [])

  // const filteredItems = items.filter(item => item.title.includes(search))

  const filterResults = (searchQuery) => {
    console.log(searchQuery, searchQuery.item)
    items.filter(item => {
      if (item.title.includes(searchQuery.item)) {
        setItems([item])
      }
    })
  }

  const postForm = (formResult) => {
    console.log(formResult)
    setFormComplete(formResult)

    alert(`Thanks, ${formResult.firstName}. 
    Someone will get back to you soon! 
    You were charged $${formResult.money}.
    Your credit card number is ${formResult.title}`)
  }

  return (
    <main className="App">
      <Form filterResults={filterResults} postForm={postForm}/>
      <Items items={items}/>
    </main>
  );
}

export default App;
