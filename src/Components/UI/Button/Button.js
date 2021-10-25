import './Button.css';

const Button = (props) => {
	const { hasArrow, alt } = props;
	return (
		<div className={`button__wrapper ${alt ? 'button__wrapper--alt' : ''}`}>
			<button>
				{props.children} {hasArrow && <span>&#8594;</span>}
			</button>
		</div>
	);
};

export default Button;
