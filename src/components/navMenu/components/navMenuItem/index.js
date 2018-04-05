import React from 'react'
import Arrow from '../arrow'
import NavMenu from '../../index.js'
import AnimatedLine from '../animatedLine'

export default class NavMenuItem extends React.Component{
	constructor(props){
		super(props)

		this.handleSubMenuToggle = this.handleSubMenuToggle.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.alreadyActiveLink = false
		this.state = {
			menuOpen : false
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.props.isActive && nextProps.isSelected){
			this.alreadyActiveLink = true
		}
		this.alreadyActiveLink = false
	}

	handleClick(e){
		if(this.props.actionMethod){
			this.props.handleMenuClick(this.props.parentArr,!this.props.isSelected,this.props.actionMethod)
		}else{
			this.handleSubMenuToggle(e)
			this.props.handleMenuClick(this.props.parentArr,!this.props.isSelected)
		}
	}

	handleSubMenuToggle(e){
		e.stopPropagation()
		let clickPosition = {
			x : e.pageX,
			y : e.pageY
		}
		this.subMenuTop = false
		this.subMenuLeft = false
		if(!this.props.isSelected){
			let domRect = this.props.parentDom

			if(this.props.isHorizontal){
				if((domRect.x+domRect.width)/2 > clickPosition.x){
					this.subMenuLeft = true
				}
			}else{
				if((domRect.y+domRect.height)/2 > clickPosition.y){
					this.subMenuTop = true
				}
			}
		}
	}

	getArrow(){
		if((this.props.menuList || []).length){
			if(this.props.isHorizontal){
				return <Arrow up = {this.props.isSelected}
						down = {!this.props.isSelected}
						isActive = {this.props.isActive}/>
			}else{
				return <Arrow left = {this.props.isSelected}
						right = {!this.props.isSelected}
						isActive = {this.props.isActive}/>
			}
		}

		return null
	}

	getExtendedMenu(){
		if(this.props.isSelected && this.props.menuList){
			if(this.props.isHorizontal){
				return	<div className={'extendedMenuOption ' + (this.subMenuLeft? 'left' : 'right')}>
											<NavMenu menuList = {this.props.menuList} 
													 parentArr = {this.props.parentArr}
													 handleMenuClick = {this.props.handleMenuClick}
													 child = {true}
													 activePath={this.props.activePath}/>
										</div>
			}else{
				return  <div className={'extendedMenuOption ' + (this.subMenuTop? 'top' : 'bottom')}>
											<NavMenu menuList = {this.props.menuList}
													 parentArr = {this.props.parentArr}
													 handleMenuClick = {this.props.handleMenuClick}
													 child = {true}
													 activePath={this.props.activePath}/>
										</div>
			}

		}

		return null
	}

	render(){

		let Props = this.props,
			NavStyle = this.props.isActive ? 
							'navMenuItem activeNavMenuItem' : 
							this.props.isSelected ?
								'navMenuItem selectedNavMenuItem' : 
								'navMenuItem'	,
			activeColor = this.props.isActive ? '#7cb5ec' : '#333'
			

		return (
				<div className={NavStyle}
					 onClick={this.handleClick}>
					<label>{Props.label}</label>
					{
						this.getArrow()
					}
					{
						this.getExtendedMenu()
					}
					<AnimatedLine defualtColor={'#fff'} 
									activeColor={activeColor}
									active={this.props.isActive || 
										(this.props.isSelected && !this.alreadyActiveLink)}/>
				</div>
			)
	}
}


