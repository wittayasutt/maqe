import React from 'react'
import styled from 'styled-components'

import Header from './components/atoms/Header'
import Posts from './components/molecules/Posts'

const Container = styled.div``

const App = () => {
	return (
		<Container className='container'>
			<Header />
			<Posts />
		</Container>
	)
}

export default App
