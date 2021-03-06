import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Cards from '../components/Cards'
import Background from '../img/norris.jpg'


function App() {

	const [ fact, setFact ] = useState(null)
	const [categories, setCategories] = useState([])
	const [category, setCategory] = useState('')
	const [input, setInput] = useState('')
	const [divVisible, setDivVisible] = useState(false)

	

	useEffect(async() => {
		let categories = await fetch('https://api.chucknorris.io/jokes/categories')
		categories = await categories.json()
		setCategories(categories)
		document.addEventListener('click', (e)=>{
			console.log(e.target.tagName)
			if (document.getElementById('content') && e.target.tagName !== 'BUTTON') {
				let el = document.getElementById('content')
				if (e.target.closest('#content')) {
					console.log('inside of content')
				} else {
					setDivVisible(false)
					el.style.display = 'none'
				}
			}
		})
	}, [])
	useEffect(()=>{console.log(divVisible, fact)},[divVisible, fact])
	useEffect(()=>{
		if(fact !== null){
			setDivVisible(true)
		}
	}, [fact])

	const makeVisible = (divVisible) => {
		const el = document.getElementById('content')
		if(!divVisible) {
			setDivVisible(true)
			el.style.display = 'block'
		}
	}
	
	
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
		if (input === '' || input.length < 3) { return }
		let fact = await fetch(`https://api.chucknorris.io/jokes/search?query=${input}`)
		fact = await fact.json()
		setInput('')
		event.target.previousElementSibling.value = ''
		setFact(fact)

	}
	
	return (
		<div className=" tc sans-serif contain bg-center" style={{ backgroundImage: `url(${Background})` }}>
			<div className="bg-black-50 bg-black-80 vh-100  flex flex-column justify-between" >
				<Header />
				{ fact!==null ? <Cards makeVisible={makeVisible} divVisible={divVisible} fact={fact}/> : ''}
				<Form
					categories={categories}
					getRandom={getRandom}
					selectCategory={selectCategory}
					handleRandomCat={handleRandomCat}
					selectInput={selectInput}
					search={search}
				/>
			</div>
		</div>
	)
}

export default App
