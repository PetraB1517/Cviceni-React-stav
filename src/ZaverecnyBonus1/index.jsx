import React, { useState } from 'react'

// Tvoříš jednoduchou komponentu, ve které je textové pole,
// do kterého jde psát. V komponentě se bude zobrazovat
// text napsaný do pole a délka textu (počet znaků).

// Zadání 1:
// Pomocí události `change` na vstupním políčku a vlastnosti
// `event.target.value` ukládej do stavu, co uživatel napsal.

// Zadání 2:
// Mezi tagy `<b></b>` vlož napsaný text.

// Zadání 3:
// V dalším odstavci `<p>` zobraz, kolik má text znaků.

// Zadání 4:
// Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.

const ZaverecnyBonus1 = () => {
	const [vlozenyText, setInput]=useState("");

	const[pocetZnaku, setPocet]=useState(0);


	const change = (event) =>{
		setInput (event.target.value);
		count();
	} 

	const count = () => {
		setPocet(vlozenyText.length+1);
	}

	return (
		<>
			<label>
				Napiš něco: <input type="password" onChange={change}/>
			</label>
			<p>
				Do políčka výše uživatel napsal: <b>{vlozenyText}</b>
			</p>
			<p>Počet znaků: {pocetZnaku}</p>
			<p hidden={pocetZnaku > 8}>Jako heslo by text neobstál.</p>
		</>
	)
}

export default ZaverecnyBonus1;