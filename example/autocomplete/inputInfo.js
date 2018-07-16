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
						definition : "function(name,value). callback to update autocomplete selected value"
					},
					{
						property : "fetchFunc",
						type : "function",
						definition : "function(searchText). promise for fetching autocomplete list from input payload"
					},
					{
						property : "value",
						type : "object",
						definition : "current value of autocomplete input"
					},
					{
						property : "fullBorderStyle",
						type : "boolean",
						definition : "pas true for all sides bordered input"
					}]

export default {
	tableHeader : tableHeader,
	tableContent : tableContent
}
