import React from 'react'
import CheckBoxCore from './core.js'
import ColorConfig	from './colorConfig.js'
import {CSSVariables} from './styledComponents.js'
import colorConfigMerger from '../../helpers/colorConfigMerger.js'


export default class CheckBox extends React.Component {
	render(){
		let props = this.props,
			styleConfig = colorConfigMerger(props.colorConfig,ColorConfig),
			inputConfig = props.inputConfig

		return (
					<CSSVariables {...styleConfig}>
						<CheckBoxCore {...inputConfig} tick_color={styleConfig.CHECKBOX_TICK_COLOR} bg_color={styleConfig.CHECKBOX_BG_COLOR}/>
					</CSSVariables>
				)
	}
}
