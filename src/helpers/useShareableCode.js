import React from 'react';
import { useState} from "react";
import Utils from "./utils";

export default function useShareableCode() {
	const [code, setCode] = useState('')
	const getCode = (input) => {
		debugger
		const hashCode = Utils.getHash(input)
		setTimeout(() => setCode(hashCode), 1000)
	}
	return [code, getCode]
}