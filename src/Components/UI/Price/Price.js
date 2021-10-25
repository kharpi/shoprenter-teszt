import './Price.css';

const Price = ({ normal, discounted }) => {
	return (
		<div className='price'>
			{discounted ? (
				<>
					<span>{normal}</span> {discounted}
				</>
			) : (
				<>{normal}</>
			)}
		</div>
	);
};

export default Price;
