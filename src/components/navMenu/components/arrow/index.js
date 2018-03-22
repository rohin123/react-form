import React from 'react'

export default class Arrow extends React.Component{
	constructor(props){
		super(props)
	}

	getArrowDirection(){
		if(this.props.up){
			return 'arrowUp'
		}else if(this.props.down){
			return 'arrowDown'
		}else if(this.props.left){
			return 'arrowLeft'
		}else{
			return 'arrowRight'
		}
	}


	render(){
		let arrowDirectionClass = this.getArrowDirection()

		return <div className={this.props.isActive ? 'arrowWrapper arrowWrapperActive' : 'arrowWrapper'}>
					<div className={'arrow ' + arrowDirectionClass}>
					</div>
				</div>
	}
}