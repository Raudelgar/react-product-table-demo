import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

import ProductCategory from './ProductCategory.js';
import Product from './Product.js';

export default class ProductTable extends Component {
	render() {
		let { products, checkBox, searchText } = this.props;
		const rows = [];
		Object.keys(products).forEach(category => {
			//adding category row
			rows.push(<ProductCategory key={uuidv1()} category={category} />);
			//ading products rows
			let items = products[category];
			if (checkBox) {
				items = items.filter(item => {
					if (item.stocked) {
						return item;
					}
				});
			}

			if (searchText.trim()) {
				items = items.filter(item => {
					if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
						return item;
					}
				});
			}

			items.forEach(item => {
				let offStockStyle = {
					color: !item.stocked ? 'red' : 'inherit'
				};

				rows.push(
					<Product
						key={uuidv1()}
						nameStyle={offStockStyle}
						name={item.name}
						price={item.price}
					/>
				);
			});
		});
		return (
			<table className='product-table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}
