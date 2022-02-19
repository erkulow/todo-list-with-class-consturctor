export const Input = (props) => {
	return (
		<input
			className={props.className}
			onChange={props.onChange}
			onBlur={props.onBlur}
			type={props.type}
			name={props.name}
			id={props.id}
			placeholder={props.placeholder}
			value={props.value}
			href={props.href}
			style={props.style}
			checked={props.checked}
		/>
	)
}
