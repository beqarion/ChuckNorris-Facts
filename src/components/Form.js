const Form = (props) => {
	const {
		categories,
		getRandom,
		selectCategory,
		handleRandomCat,
		selectInput,
		search
	} = props
	return(
		<div className=" flex items-center flex-column white-90 f7 f6-m f5-l">
			<div>
				<button onClick={getRandom}className=" link dim br3 ph3 pv2 mb2 dib white bg-dark-blue">Random</button>
			</div>
            or
			<form>
				<select defaultValue onChange={selectCategory}>
					<option disabled value> -select an option- </option>
					{categories.map( el => <option key={el} value={el}>{el}</option>)}
				</select>

				<button type="submit" onClick={handleRandomCat}className=" link dim br3 ph3 pv2 mb2 dib white bg-dark-blue">Random By Category</button>
			</form>
            or
			<form>
				<input onChange={selectInput} placeholder='Use 3 symbols or more'/>
				<button type='submit' onClick={search} className=" link dim br3 ph3 pv2 mb2 dib white bg-dark-blue">With Keyword</button>
			</form>

		</div>
	)
}

export default Form