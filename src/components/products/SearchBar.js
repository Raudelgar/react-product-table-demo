import React, { useState } from 'react';

export default function SearchProduct(props) {
	const [value, setvalue] = useState('');

	const searchValue = e => {
		setvalue(e.target.value);
		props.filterText(e.target.value);
	};
	return (
		<form className='search-product'>
			<input
				className='input-search'
				type='text'
				name='product'
				placeholder='Search...'
				value={value}
				onChange={searchValue}
			/>
			<p className='filter-search'>
				<input type='checkbox' name='stock' onChange={props.filterProducts} />{' '}
				Only show products in stock
			</p>
		</form>
	);
}
