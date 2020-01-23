import React from 'react'
import styled from 'styled-components'
import posts from '../../assets/posts'
import config from '../../config'
import { range } from 'lodash'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 32px auto 64px;
	font-size: 0.8rem;
	font-weight: 600;
`

const Button = styled.div`
	margin: 0 12px;
	transition: 0.1s;
	cursor: pointer;
	${props => !props.visible && 'visibility: hidden'};

	:hover {
		color: #aaaaaa;
	}
`

const Page = styled.div`
	height: 25px;
	width: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.1s;
	cursor: pointer;

	${props => props.selected && 'background-color: #ba4138'};
	${props => props.selected && 'color: #ffffff'};
	${props => props.selected && 'border-radius: 50%'};

	:hover {
		${props => !props.selected && 'color: #aaaaaa'};
		${props => props.selected && 'opacity: 0.8'};
	}
`

const setPage = (page, pagesRange, setSelectedPage) => {
	if (page < 0) setSelectedPage(0)
	else if (page > pagesRange - 1) setSelectedPage(pagesRange - 1)
	else setSelectedPage(page)
}

const Pagination = props => {
	const { selectedPage, setSelectedPage } = props
	const pagesRange = Math.ceil(posts.length / config.postsPerPage)

	return (
		<Wrapper>
			<Button
				visible={selectedPage !== 0}
				onClick={() => setPage(selectedPage - 1, pagesRange, setSelectedPage)}>
				Previous
			</Button>
			{range(pagesRange).map((page, index) => (
				<Page
					selected={page === selectedPage}
					onClick={() => setPage(page, pagesRange, setSelectedPage)}
					key={index}>
					{page}
				</Page>
			))}
			<Button
				visible={selectedPage !== pagesRange - 1}
				onClick={() => setPage(selectedPage + 1, pagesRange, setSelectedPage)}>
				Next
			</Button>
		</Wrapper>
	)
}

export default Pagination
