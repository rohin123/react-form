import React from 'react'
import SelectInputCore from './core.js'
import ColorConfig	from './colorConfig.js'
import {CSSVariables} from './styledComponents.js'
import colorConfigMerger from '../../helpers/colorConfigMerger.js'


export default class SelectInput extends React.Component {
	render(){
		let props = this.props,
			styleConfig = colorConfigMerger(props.colorConfig,ColorConfig),
			inputConfig = props.inputConfig

		return (
					<CSSVariables {...styleConfig}>
						<SelectInputCore {...inputConfig}/>
					</CSSVariables>
				)
	}
}