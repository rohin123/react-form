import React from 'react'
import NavMenu from '../../src/components/navMenu'
import styled from 'styled-components'

const VerticalNavWrapper = styled.div`
	width : 150px;
`

const HorizontalNavWrapper = styled.div`
	width : 100%;
	margin-top : 10px;
`

export default class NavMenuExample extends React.Component{
	constructor(props){
		super(props)
	
		this.menuList1 = [{
							label : 'Option1',
							menuList : [{
											label : 'Option11'
										},
										{
											label : 'Option12'
										},
										{
											label : 'Option13'
										}]	
						},
						{
							label : 'Option2',
							menuList : [{
											label : 'Option21'
										},
										{
											label : 'Option22'
										},
										{
											label : 'Option23'
										}]		
						},
						{
							label : 'Option3',
							menuList : [{
											label : 'Option31'
										},
										{
											label : 'Option32'
										},
										{
											label : 'Option33'
										}]		
						},
						{
							label : 'Option4',
							menuList : [{
											label : 'Option41'
										},
										{
											label : 'Option42'
										},
										{
											label : 'Option43'
										}]		
						},
						{
							label : 'Option5',
							menuList : [{
											label : 'Option51'
										},
										{
											label : 'Option52'
										},
										{
											label : 'Option53'
										}]		
						},
						{
							label : 'Option6',
							menuList : [{
											label : 'Option61'
										},
										{
											label : 'Option62'
										},
										{
											label : 'Option63',
											menuList : [{
															label : 'Option631'
														},
														{
															label : 'Option632'
														},
														{
															label : 'Option633'
														}]
										}]	
						}]

			this.menuList2 = [{
							label : 'Option1',
							menuList : [{
											label : 'Option11'
										},
										{
											label : 'Option12'
										},
										{
											label : 'Option13'
										}]	
						},
						{
							label : 'Option2',
							menuList : [{
											label : 'Option21'
										},
										{
											label : 'Option22'
										},
										{
											label : 'Option23'
										}]		
						},
						{
							label : 'Option3',
							menuList : [{
											label : 'Option31'
										},
										{
											label : 'Option32'
										},
										{
											label : 'Option33'
										}]		
						},
						{
							label : 'Option4',
							menuList : [{
											label : 'Option41'
										},
										{
											label : 'Option42'
										},
										{
											label : 'Option43'
										}]		
						},
						{
							label : 'Option5',
							menuList : [{
											label : 'Option51'
										},
										{
											label : 'Option52'
										},
										{
											label : 'Option53'
										}]		
						},
						{
							label : 'Option6',
							menuList : [{
											label : 'Option61'
										},
										{
											label : 'Option62',
											actionMethod : ()=>{
												console.log('action called \n',this)
											}
										},
										{
											label : 'Option63',
											menuList : [{
															label : 'Option631'
														},
														{
															label : 'Option632'
														},
														{
															label : 'Option633'
														}]
										}]	
						}]			
	}

	render(){
		return (
			<div>
				<VerticalNavWrapper>
					<NavMenu menuList={this.menuList1} 
								isHorizontal={false}/>
				</VerticalNavWrapper>
				<HorizontalNavWrapper>
					<NavMenu menuList={this.menuList2} 
								isHorizontal={true}/>
				</HorizontalNavWrapper>	
			</div>	
			
		)
	}
}