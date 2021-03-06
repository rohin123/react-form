import React from 'react'
import LabeledInputCore from './core.js'
import ColorConfig	from './colorConfig.js'
import {CSSVariables} from './styledComponents.js'
import colorConfigMerger from '../../helpers/colorConfigMerger.js'


class NumberInput extends React.Component {
	render(){
		let props = this.props,
			styleConfig = colorConfigMerger(props.colorConfig,ColorConfig),
			inputConfig = props.inputConfig

		return (
					<CSSVariables {...styleConfig}>
						<LabeledInputCore type='number' {...inputConfig}/>
					</CSSVariables>
				)
	}
}

class TextInput extends React.Component { 
	render(){
		let props = this.props,
			styleConfig = colorConfigMerger(props.colorConfig,ColorConfig),
			inputConfig = props.inputConfig
 
		return (
					<CSSVariables {...styleConfig}>
						<LabeledInputCore type='text' {...inputConfig}/>
					</CSSVariables>
				)
	}	
}

export {NumberInput,TextInput}