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
        <div className=" flex items-center flex-column white-90 ">
            <div>
                <button onClick={getRandom}>Random</button>
            </div>
            or
            <form>
                <select defaultValue onChange={selectCategory}>
                    <option disabled value> -select an option- </option>
                    {categories.map( el => <option key={el} value={el}>{el}</option>)}
                </select>
                
                <button type="submit" onClick={handleRandomCat}>Random By Category</button>
            </form>
            or
            <form>
                <input onChange={selectInput}/>
                <button type='submit' onClick={search}>With Keyword</button>
            </form>
            
        </div>
    )
}

export default Form