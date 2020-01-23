import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
	flex: 1;
	display: flex;

	@media screen and (max-width: 960px) {
		flex-direction: column;
	}
`

const Image = styled.img`
	height: 120px;
	width: 160px;
	margin-right: 12px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		height: auto;
		min-height: 120px;
		width: 100%;
		margin-bottom: 8px;
	}
`

const Content = styled.div`
	flex: 1;
	margin-bottom: 16px;
`

const Title = styled.h4`
	margin-bottom: 8px;
	cursor: pointer;
`

const Body = styled.p`
	font-size: 0.8rem;
	margin-bottom: 12px;
`

const Date = styled.div`
	display: flex;
	font-size: 0.8rem;
	color: #b4b4b4;
`

const DateText = styled.div`
	font-style: italic;
	font-weight: 700;
	margin-left: 4px;
`

const Article = props => {
	const { post } = props

	return (
		<Wrapper>
			<Image src={post.image_url} alt={post.title} />
			<Content>
				<Title>{post.title} </Title>
				<Body>{post.body}</Body>
				<Date>
					<FontAwesomeIcon icon={faClock} />
					<DateText>{moment(post.created_at).fromNow()}</DateText>
				</Date>
			</Content>
		</Wrapper>
	)
}

export default Article
