import React, {useState, useStates} from 'react'
import './ukol.css'

// Děláš jednoduchou komponentu zobrazující úkoly,
// které jdou označit jako splněné.

// Zadání 1:
// Pomocí `map` vypiš v seznamu `ul` všechny úkoly
// pomocí komponenty `Ukol`.

// Zadání 2:
// V komponentě Ukol si nachystej stavovou proměnnou
// s výchozí hodnotou `false`.
// Klikem na tlačítko ji změň na `true` pro splněný úkol.

// Zadání 3:
// Je-li úkol splněný, nerenderuj tlačítko a k `li` přidej navíc třídu `ukol--splnen`.

const Ukol = ({ nazev },{key}) => {
	key = {nazev};
	const [splneno, setSplneno]= useState(false);

	const spln = () => {
		setSplneno(true);
	}

	return (
		<li className={splneno ? "ukol ukol--splnen" :"ukol"}>
			<span className="ukol__nazev">{nazev}</span>
			<button className="ukol__akce" disabled = {splneno} onClick={() => { spln() }}>splnit</button>
		</li>
	)
}

const Uloha6 = () => {
	const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš']

	return <ul> { ukoly.map(item => {  
        return (
          <Ukol 
            nazev={item}
			key={item}
			
          />
        )})}
		
		</ul>
}

export default Uloha6;
