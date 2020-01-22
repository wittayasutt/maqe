import React, { Fragment } from 'react'
import styled from 'styled-components'

import Post from '../Post'

const Title = styled.h4`
	margin-bottom: 8px;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Posts = () => {
	return (
		<Fragment>
			<Title>Posts</Title>
			<Container>
				<Post />
			</Container>
		</Fragment>
	)
}

export default Posts
