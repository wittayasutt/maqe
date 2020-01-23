import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Posts from './components/Posts'
import Pagination from './components/Pagination'

const Container = styled.div``

const App = () => {
	const [selectedPage, setSelectedPage] = useState(0)

	return (
		<Container className='container'>
			<Header />
			<Posts page={selectedPage} />
			<Pagination
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
		</Container>
	)
}

export default App
