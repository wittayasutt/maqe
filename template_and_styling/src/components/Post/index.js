import React from 'react'
import styled from 'styled-components'

import Article from './article'
import Author from './author'

const Wrapper = styled.div`
	min-height: 200px;
	width: 100%;
	display: flex;
	padding: 8px;
	border: 1px solid #e8e8e8;
	border-radius: 4px;
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
	margin-bottom: 16px;

	@media screen and (max-width: 960px) {
		flex-direction: column;
	}
`

const Divider = styled.div`
	width: 1px;
	background-color: #e8e8e8;
	margin-left: 12px;

	@media screen and (max-width: 960px) {
		height: 1px;
		width: 100%;
		margin: 12px 0;
	}
`

const Post = props => {
	const { post, author } = props

	return (
		<Wrapper className='post'>
			<Article post={post} />
			<Divider />
			<Author author={author} />
		</Wrapper>
	)
}

export default Post
