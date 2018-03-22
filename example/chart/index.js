import React from 'react'
import LineChart from '../../src/components/lineChart'
import styled from 'styled-components'


const GraphDiv = styled.div`
	background : whitesmoke;
	padding : 10px;
`

export default class LineChartExample extends React.Component{
	render(){
		return (
			<div>
				<GraphDiv>
					<LineChart id={'svg0'}
						width = {450}
						height = {250}
						xData = {[0,1,2,3,4,5,6,7,8,9]}
						yData = {[{x : 0, y: 20},
									{x: 1, y:2000},
									{x : 2, y :-2000},
									{x : 3, y : 100},
									{x : 4,y : 200},
									{x : 5, y : -40},
									{x : 6, y : 200},
									{x : 7, y : 600},
									{x : 8, y : 500},
									{x : 9, y : 140}]}
						lineChart = {true}/>

				</GraphDiv>
				<GraphDiv>
					<LineChart id={'svg1'}
						width = {450}
						height = {250}
						xData = {[0,1,2,3,4,5,6,7,8,9]}
						yData = {[{x : 0, y: 20},
									{x: 1, y:2000},
									{x : 2, y :-2000},
									{x : 3, y : 100},
									{x : 4,y : 200},
									{x : 5, y : -40},
									{x : 6, y : 200},
									{x : 7, y : 600},
									{x : 8, y : 500},
									{x : 9, y : 140}]}
						barChart = {true}/>

				</GraphDiv>
				<GraphDiv>					
					<LineChart id={'svg2'}
						width = {450}
						height = {250}
						xData = {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
									21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]}
						yData = {[{x : 0, y: 20},
									{x: 1, y:2000},
									{x : 2, y :500},
									{x : 3, y : 100},
									{x : 4,y : 200},
									{x : 5, y : 40},
									{x : 6, y : 200},
									{x : 7, y : 600},
									{x : 8, y : 500},
									{x : 9, y : 140},
									{x : 10, y : 211},
									{x: 11, y:2000},
									{x : 12, y :500},
									{x : 13, y : 100},
									{x : 14,y : 200},
									{x : 15, y : 40},
									{x : 16, y : 200},
									{x : 17, y : 600},
									{x : 18, y : 500},
									{x : 19, y : 140},
									{x : 20, y: 20},
									{x : 21, y:2000},
									{x : 22, y :500},
									{x : 23, y : 100},
									{x : 24,y : 200},
									{x : 25, y : 40},
									{x : 26, y : 200},
									{x : 27, y : 600},
									{x : 28, y : 500},
									{x : 29, y : 140},
									{x : 30, y: 20},
									{x : 31, y:2000},
									{x : 32, y :500},
									{x : 33, y : 100},
									{x : 34,y : 200},
									{x : 35, y : 40},
									{x : 36, y : 200},
									{x : 37, y : 600},
									{x : 38, y : 500},
									{x : 39, y : 140}]}
						lineChart = {true}/>					
				</GraphDiv>	
				<GraphDiv>					
					<LineChart id={'svg3'}
						width = {450}
						height = {250}
						xData = {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
									21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]}
						yData = {[{x : 0, y: 20},
									{x: 1, y:2000},
									{x : 2, y :500},
									{x : 3, y : 100},
									{x : 4,y : 200},
									{x : 5, y : 40},
									{x : 6, y : 200},
									{x : 7, y : 600},
									{x : 8, y : 500},
									{x : 9, y : 140},
									{x : 10, y : 211},
									{x: 11, y:2000},
									{x : 12, y :500},
									{x : 13, y : 100},
									{x : 14,y : 200},
									{x : 15, y : 40},
									{x : 16, y : 200},
									{x : 17, y : 600},
									{x : 18, y : 500},
									{x : 19, y : 140},
									{x : 20, y: 20},
									{x : 21, y:2000},
									{x : 22, y :500},
									{x : 23, y : 100},
									{x : 24,y : 200},
									{x : 25, y : 40},
									{x : 26, y : 200},
									{x : 27, y : 600},
									{x : 28, y : 500},
									{x : 29, y : 140},
									{x : 30, y: 20},
									{x : 31, y:2000},
									{x : 32, y :500},
									{x : 33, y : 100},
									{x : 34,y : 200},
									{x : 35, y : 40},
									{x : 36, y : 200},
									{x : 37, y : 600},
									{x : 38, y : 500},
									{x : 39, y : 140}]}
						barChart = {true}/>					
				</GraphDiv>	
			</div>					
			)
	}
}