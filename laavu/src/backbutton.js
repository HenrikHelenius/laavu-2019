import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function BackButton() {
	return (
		<Button as={Link} variant="light" to="/" style={{margin: 0}}>Go back</Button>
	)
}

export default BackButton;