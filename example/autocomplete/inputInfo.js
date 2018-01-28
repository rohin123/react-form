const tableHeader = {
						property : "Property",
						type : "Type",
						definition : "Definition"
					}

const tableContent = [
					{
						property : "label",
						type : "String",
						definition : "label text of autocomplete input"
					},
					{
						property : "name",
						type : "String",
						definition : "name of autocomplete input"
					},
					{
						property : "setItem",
						type : "function",
						definition : "function(name,value). callback to update autocomplete value"
					},
					{
						property : "fetchFunc",
						type : "function",
						definition : "function(searchText). promise for fetching autocomplete list"
					},
					{
						property : "value",
						type : "object",
						definition : "current value of autocomplete input"
					}]

export default {
	tableHeader : tableHeader,
	tableContent : tableContent
}
					