import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function BackButton() {
	let history = useHistory();
	return (
		<Button variant="light" onClick={() => history.goBack()} style={{margin: 0}}>Go back</Button>
	)
}

export default BackButton;