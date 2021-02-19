import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Cards from '../components/Cards'
import Background from '../img/norris.jpg'


function App() {

  const [ fact, setFact ] = useState(null)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [input, setInput] = useState('')

  useEffect(async()=>{
    let categories = await fetch('https://api.chucknorris.io/jokes/categories')
    categories = await categories.json()
    setCategories(categories)
  }, [])

  const getRandom = async () => {
    let fact = await fetch('https://api.chucknorris.io/jokes/random')
    fact = await fact.json()
    setFact(fact)
  }
  
  const selectCategory = (event) => {
    setCategory(event.target.value)
  }
  const handleRandomCat = async (event) => {
    event.preventDefault()
    if (category === '') {return}
    let fact = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    fact = await fact.json()
    setFact(fact)
  }
  const selectInput = (event) => {
    setInput(event.target.value)
  }
  const search = async (event) => {
    event.preventDefault()
    if (input === '') { return }
    let fact = await fetch(`https://api.chucknorris.io/jokes/search?query=${input}`)
    fact = await fact.json()
    setFact(fact)
  }
  const populateCards = () => {

  }

  return (
    <div className="sans-serif contain bg-center" style={{backgroundImage: `url(${Background})`}}>
      <div className="bg-black-50 bg-black-80 vh-100" >
      <Header />
      <Form 
        categories={categories} 
        getRandom={getRandom}
        selectCategory={selectCategory}
        handleRandomCat={handleRandomCat}
        selectInput={selectInput}
        search={search}
      />
      { fact!==null ? <Cards fact={fact}/> : '' }
      </div>
    </div>
  )
}

export default App;
