import React from 'react';

export default function Product({ nameStyle, name, price }) {
	return (
		<tr>
			<td style={nameStyle}>{name}</td>
			<td>{price}</td>
		</tr>
	);
}
