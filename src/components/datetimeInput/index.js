import React from 'react'
import DateTimeCore from './core.js'
import ColorConfig	from './colorConfig.js'
import {CSSVariables} from './styledComponents.js'

export default class DateTime extends React.Component {
	render(){
		let props = this.props,
			styleConfig = props.colorConfig || ColorConfig,
			inputConfig = props.inputConfig

		return (
					<CSSVariables {...styleConfig}>
						<DateTimeCore {...inputConfig}/>
					</CSSVariables>
				)
	}
}