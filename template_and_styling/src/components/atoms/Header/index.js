import React, { Fragment } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
	font-weight: 500;
	margin-bottom: 8px;
`

const Subtitle = styled.h2`
	margin-bottom: 8px;
`

const Header = () => {
	return (
		<Fragment>
			<Title>MAQE Forums</Title>
			<Subtitle>Subtitle</Subtitle>
		</Fragment>
	)
}

export default Header
