class CommonFunc{
	randString(x){
	    var s = "";
	    while(s.length<x&&x>0){
	        var r = Math.random();
	        s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
	    }
	    return s;
	}

	isUndefined(value){
		if(value || (value===0) || (value=="") || (value==false)){
			return false
		}

		return true
	}

}

export default new CommonFunc()