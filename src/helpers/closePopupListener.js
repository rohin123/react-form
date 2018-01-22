import CommonFunc from './commonFunc.js'

/*class ClosePopupListener{
	init(){
		this.eventListeners = {}
		document.addEventListener('click',this.eventListenersFunc.bind(this))
	}

	eventListenersFunc(e){
		(Object.keys(this.eventListeners)||[]).map((key)=>{
			(this.eventListeners[key])(e)
		})
	}

	addListenerFunc(func){
		if(typeof func != "function"){
			return null
		}
		let key = CommonFunc.randString(10)
		while(this.eventListeners[key]){
			key = CommonFunc.randString(10)
		}

		this.eventListeners[key] = func
		return key
	}

	removeListenerFunc(key){
		if(key){
			delete this.eventListeners[key]
		}
	}

	destroy(){
		document.removeEventListener('click',this.eventListenersFunc.bind(this))
	}
}*/

class ClosePopupListener{
	addListenerFunc(func){
		document.addEventListener('click',func)
	}

	removeListenerFunc(func){
		document.removeEventListener('click',func)
	}
}

export default new ClosePopupListener()