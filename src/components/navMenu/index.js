import React from 'react'
import NavMenuItem from './components/navMenuItem'
import {} from './main.scss'

export default class NavMenu extends React.Component{
	constructor(props){
		super(props)
		this.handleMenuClick = this.handleMenuClick.bind(this)
		//this.isNavItemActive = this.isNavItemActive.bind(this)

		this.state = {
			menuList : this.props.menuList
		}
	}

	componentWillMount(){
		this.initState = true
	}

	componentDidMount(){
		this.domRect = this.navElem.getBoundingClientRect()
		this.setState({
			reRender : true
		})
	}

	resetMenu(menu){
		for(var i = 0 ; i < menu.length ; i++){
			menu[i].isSelected = false
			if(menu[i].menuList && menu[i].menuList.length){
				this.resetMenu(menu[i].menuList)
			}
		}
	}

	handleMenuClick(parentArr,val,action){
		if(this.props.child){
			this.props.handleMenuClick(parentArr,val,action)
		}else{
			let list = this.state.menuList,
				currList = list
			this.resetMenu(list)
			
			if(action){
				action()
				this.initState = false
				this.activePath = parentArr
				this.childActivePath = parentArr.slice(1)
			}else{
				for(var i = 0 ; i <parentArr.length ; i++){
					let elem = currList[parentArr[i]]
					
					if(i == (parentArr.length-1)){
						elem.isSelected = val
					}else{
						elem.isSelected = true
					}
					
					currList = elem.menuList
				}
			}

			this.setState({
				menuList : list
			})	
		}
		
	}

	isNavItemActive(index){
		if((this.activePath || this.props.activePath || []).length){
			let activeIndex = (this.activePath ||this.props.activePath)[0]
			if(activeIndex == index){
				return true
			}
		}

		return false
	}

	isDefaultActive(menuItem){
		if(this.initState && menuItem.isDefaultActive){
			return true
		}

		return false
	}

	render(){
		let navInnerHtml = (this.state.menuList||[]).map((menuItem,index)=>{
			return <NavMenuItem {...menuItem} 
								isActive = {this.isNavItemActive(index) || this.isDefaultActive(menuItem)}
								parentDom = {this.domRect}
								isHorizontal={this.props.isHorizontal}
								handleMenuClick={this.props.child ? this.props.handleMenuClick : 
													this.handleMenuClick}
								parentArr = {(this.props.parentArr||[]).concat([index])}
								activePath={this.isNavItemActive(index) ? 
													this.childActivePath : null}/>
		})	

		if((this.state.menuList||[]).length){
			return <div className={'navContainer ' + (this.props.isHorizontal ? 'navHorizontal' : 'navVertical')} 
					ref={(elem)=>{this.navElem = elem}}>
					{navInnerHtml}
				</div>
			}else{
				return null
			}
		
	}
}
