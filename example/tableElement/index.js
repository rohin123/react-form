import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableWrapper = styled.div`
	overflow : auto;
`

const Table = styled.table`
	width : 100%;
	border-collapse : collapse;
	text-align : left;
	th,td{
		border : 1px solid;
		padding : 5px;
	}
`

export default class TableElement extends React.PureComponent{
	
	getTableHeader(){
		let props = this.props
		let ret = []
		for( var key in props.tableHeader ){
			ret.push(<th>{props.tableHeader[key]}</th>) 
		}	

		return ret
	}

	getTableRow(row){
		let props = this.props
		let ret = []
		for( var key in props.tableHeader ){
			ret.push(<td>{row[key]||''}</td>)
		}

		return ret
	}

	render(){
		let props = this.props,
	    	tableHeader = <tr>{this.getTableHeader()}</tr>,
			tableContent = props.tableContent.map((row)=>{
				return <tr>{this.getTableRow(row)}</tr>
			})

		return (
				<TableWrapper>
					<Table>
						<thead>
							{tableHeader}
						</thead>
						<tbody>
							{tableContent}
						</tbody>
					</Table>
				</TableWrapper>	
			)
	}
}

TableElement.propTypes = {
	tableHeader : PropTypes.object.isRequired,
	tableContent : PropTypes.object.isRequired
}