import React from 'react'
import {} from './main.scss'
 
export default class Loaders extends React.Component{
	render(){
			return (
				<svg width='20' height='20'>
					<g className='rotate-group'>
						<path d='M2 10 A 8 8 0 0 0 18 10'/>
					</g>
				</svg>	
			)
	}
}