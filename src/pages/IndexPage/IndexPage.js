import React, {useEffect, useState} from 'react';
import BoxInput from "../../components/BoxInput";
import Space from "../../components/Space";
import ShareableCode from "../../components/ShareableCode";
import useShareableCode from "../../helpers/useShareableCode";
import Typography from "@material-ui/core/Typography";

function IndexPage() {
	const [code, getCode] = useShareableCode()
	const [input, setInput] = useState()

	const handleSubmit = () => {
		debugger
		getCode(input)
	}

	const handleInputChange = (e) => {
		debugger
		setInput(e.currentTarget.value)
	}

	return <React.Fragment>
		<Typography variant="h1">Share text easily & securely.</Typography>
		<Space height="10px"/>
		<p></p>
		<Space height="50px" />
		<BoxInput onSubmit={handleSubmit} onChange={handleInputChange} placeholder="Share anything you want..." />
		<Space height="10px" />
		<ShareableCode code={code} />
	</React.Fragment>
}

export default IndexPage;