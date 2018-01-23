import React from 'react'
import AutoCompleteCore from './core.js'
import ColorConfig	from './colorConfig.js'
import {CSSVariables} from './styledComponents.js'

export default class AutoComplete extends React.Component {
	render(){
		let props = this.props,
			styleConfig = props.colorConfig || ColorConfig,
			inputConfig = props.inputConfig

		return (
					<CSSVariables {...styleConfig}>
						<AutoCompleteCore {...inputConfig}/>
					</CSSVariables>
				)
	}
}