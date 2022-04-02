import React, { useState } from 'react'

// Tvoříš komponentu, která zobrazuje vysoce přesnou předpověď
// počasí v Brně. :D

// Zadání 1:
// Vytvoř stavovou proměnnou s výchozí hodnotou `možná`.

// Zadání 2:
// Proměnnou vypiš místo `ano/ne/možná`.

// Zadání 3:
// Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`,
// případně `ne` na `možná`.

const Uloha8 = () => {
	const[pocasi, setPocasi] = useState('možná');

	const zmenPocasi=() => {
		if (pocasi == "možná") {
			setPocasi("ano");
		} else if (pocasi == "ano") {
			setPocasi("ne");
		} else setPocasi('možná');
	}

	return (
		<>
			<h3>Prší v Brně: {pocasi}</h3>
			<button onClick={() => zmenPocasi()}>změnit</button>
		</>
	)
}

export default Uloha8;