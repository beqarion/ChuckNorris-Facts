const Card = (props) => {
	const { fact } = props
	return (
		<article className="f3-l f4-m f5 center bg-white-80 br3 pa3 pa4-ns mv3 ba b--black-10">
			<div className="tc">
				<img src={fact.icon_url} className="br-5 h3 w3 dib" title="Photo of a kitty staring at you" />
				<hr className="mw3 bb bw1 b--black-10" />
			</div>
			<p className="lh-copy measure center black-70 ">{fact.value} </p>
		</article>
	)
}

export default Card