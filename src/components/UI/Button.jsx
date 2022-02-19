export const Button = (props) => {
	return (
		<button
			className={props.className}
			onClick={props.onClick}
			onChange={props.onChange}
			type={props.type}
			id={props.id}
		>
			{props.children}
		</button>
	)
}
