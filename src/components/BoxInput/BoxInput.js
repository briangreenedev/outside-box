import React from 'react';
import {TextField, Button, Container, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Space from "../Space";

const useStyles = makeStyles(theme => ({
	formContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: "column",
		maxWidth: '700px'
	},
	button: {
		fontSize: '1.3em',
		padding: '15px'
	}
}))

function BoxInput({onSubmit, onChange, placeholder}) {
	const classes = useStyles()

	return (
		<Container className={classes.formContainer}>
			<Typography />
			<TextField
				placeholder={placeholder}
				onChange={onChange}
				inputProps={{
					style: { textAlign: "center", fontSize: '1.5em', lineHeight: '1.5em' }
				}}
				multiline={true} />
			<Space height="20px" />
			<Button color="primary" onClick={onSubmit} className={classes.button}>Get Shareable Code</Button>
		</Container>
	);
}

export default BoxInput;