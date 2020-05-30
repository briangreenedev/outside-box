import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	space: props => ({
		height: `${props.height}`
	})
}))

function Space(props) {
	const classes = useStyles(props)
	return (
		<div className={classes.space}></div>
	);
}

export default Space;