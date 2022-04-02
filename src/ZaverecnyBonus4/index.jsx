import React, { useState } from 'react'

// Zadání:
// Pomocí dvou stavových proměnných s výchozí hodnotou 0,
// které se budou měnit podle vstupních políček,
// vypiš do `<output></output>` jejich součet.

const ZaverecnyBonus4 = () => {
	const[prvni,setPrvni]=useState(0);
	const[druha, setDruha]=useState(0);

	
	
	return (
		<>
			<input type="number" defaultValue="0" onChange={(event)=>{setPrvni(Number(event.target.value))}} /> +{' '}
			<input type="number" defaultValue="0" onChange={(event)=>{setDruha(Number(event.target.value))}}/> = <output> {prvni+druha} </output>
		</>
	)
}

export default ZaverecnyBonus4;