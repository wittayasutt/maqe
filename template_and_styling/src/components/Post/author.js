import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
	width: 180px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`

const Image = styled.img`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	margin-bottom: 8px;
	cursor: pointer;
`

const Name = styled.div`
	color: #c15f58;
	font-size: 0.8rem;
	font-weight: 800;
	margin-bottom: 8px;
	transition: 0.1s;
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}
`

const Role = styled.div`
	font-size: 0.8rem;
	margin-bottom: 8px;
`

const Place = styled.div`
	display: flex;
	font-size: 0.7rem;
	margin-bottom: 8px;
`

const PlaceText = styled.div`
	margin-left: 4px;
`

const Author = props => {
	const { author } = props

	return (
		<Wrapper>
			<Image src={author.avatar_url} alt={author.name} />
			<Name>{author.name}</Name>
			<Role>{author.role}</Role>
			<Place>
				<FontAwesomeIcon icon={faMapMarkerAlt} />
				<PlaceText>{author.place}</PlaceText>
			</Place>
		</Wrapper>
	)
}

export default Author
