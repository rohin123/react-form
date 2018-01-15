const KeyUp = 38
const KeyDown = 40

export default class KeyPressHandlerOnList{
	constructor(listLength){
		this.listLength = listLength
		this.index = -1
	}

	handleKeyPress(keyCode){
		//debugger
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
}