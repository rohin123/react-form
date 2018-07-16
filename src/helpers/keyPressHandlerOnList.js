const KeyUp = 38
const KeyDown = 40

export default class KeyPressHandlerOnList{
	constructor(containerElem, listLength){
		this.listLength = listLength
		this.index = -1
		this.container = containerElem
	}

	handleKeyPress(keyCode){
		console.log('handleKeyPress',this.listLength,this.index)
		switch(keyCode){
			case KeyDown : {
				let tempIndex = this.index + 1
				if(tempIndex >=0 && tempIndex<(this.listLength)){
					this.index = tempIndex
				}
				return this.index
			}

			case KeyUp :{
				let tempIndex = this.index - 1
				if(tempIndex >=0 && tempIndex<(this.listLength)){
					this.index = tempIndex
				}
				return this.index
			}

			default : {
				return this.index
			}
		}
	}

	updateListLength(newLength){
		this.listLength = newLength
		this.index = -1
	}

	scrollDropDown(listElemId){
		console.log(listElemId)
		if(!this.parentHeight){
			this.parentHeight = this.container.clientHeight
		}

		const childElem = document.getElementById(listElemId),
					childHeight = childElem.clientHeight,
					childOffsetTop = childElem.offsetTop,
					scrollTop = this.container.scrollTop

		console.log(childOffsetTop,scrollTop,childHeight,this.parentHeight)			
		if(childOffsetTop < scrollTop){
			this.container.scrollTop = childOffsetTop
		}

		if((childOffsetTop+childHeight) > (scrollTop+this.parentHeight)){
			this.container.scrollTop = (childOffsetTop - (this.parentHeight - childHeight))
		}
	}
}
