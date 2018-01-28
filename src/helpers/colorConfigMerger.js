import CommonFunc from './commonFunc.js'

export default function colorConfigMerger(config1,config2){
	if(!config1){
		return config2
	}
	
	let mergeConfig = {}
	for (var key in config2){
		if(!CommonFunc.isUndefined(config1[key])){
			mergeConfig[key] = config1[key]
		}else{
			mergeConfig[key] = config2[key]
		}
	}

	return mergeConfig
}