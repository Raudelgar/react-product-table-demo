import React, { Component } from 'react';
import SearchProduct from './products/SearchBar.js';
import ProductTable from './products/ProductTable.js';

export default class FilterableProductoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hashProducts: {},
			checkBox: false,
			searchText: ''
		};
	}

	componentDidMount() {
		//like fetching data
		const products = [
			{
				category: 'Sporting Goods',
				price: '$49.99',
				stocked: true,
				name: 'Football'
			},
			{
				category: 'Sporting Goods',
				price: '$9.99',
				stocked: true,
				name: 'Baseball'
			},
			{
				category: 'Sporting Goods',
				price: '$29.99',
				stocked: false,
				name: 'Basketball'
			},
			{
				category: 'Electronics',
				price: '$99.99',
				stocked: true,
				name: 'iPod Touch'
			},
			{
				category: 'Electronics',
				price: '$399.99',
				stocked: false,
				name: 'iPhone 5'
			},
			{
				category: 'Electronics',
				price: '$199.99',
				stocked: true,
				name: 'Nexus 7'
			}
		];

		//organize data
		const hashProducts = Object.assign({}, this.state.hashProducts);

		for (let product of products) {
			let { category, price, stocked, name } = product;
			if (!hashProducts.hasOwnProperty(category)) {
				hashProducts[category] = [];
			}
			hashProducts[category].push({ price, stocked, name });
		}

		this.setState({ hashProducts });
	}

	handleCheckbox = () => {
		const checkBox = !this.state.checkBox;
		this.setState({ checkBox });
	};

	filterText = word => {
		this.setState({ searchText: word });
	};

	render() {
		return (
			<div className='filter-table'>
				<SearchProduct
					filterProducts={this.handleCheckbox}
					filterText={this.filterText}
				/>
				<ProductTable
					products={this.state.hashProducts}
					checkBox={this.state.checkBox}
					searchText={this.state.searchText}
				/>
			</div>
		);
	}
}
