import React, { Fragment } from 'react'
import styled from 'styled-components'
import posts from '../../assets/posts'
import authors from '../../assets/authors'
import config from '../../config'
import { find, sortBy } from 'lodash'

import Post from '../Post'

const Title = styled.h4`
	margin-bottom: 12px;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;

	.post:nth-child(even) {
		background: #f0f0f0;
	}
`

const findPosts = (allPosts, page) => {
	const { postsPerPage } = config
	const sortedPosts = sortBy(allPosts, -'created_at')
	return sortedPosts.slice(page * postsPerPage, (page + 1) * postsPerPage)
}

const Posts = props => {
	return (
		<Fragment>
			<Title>Posts</Title>
			<Container>
				{findPosts(posts, props.page).map((post, index) => (
					<Post
						post={post}
						author={find(authors, author => author.id === post.author_id)}
						key={index}
					/>
				))}
			</Container>
		</Fragment>
	)
}

export default Posts
