import React, { useState } from 'react'

// Děláš počítadlo, kde jde tlačítky zvětšovat nebo zmenšovat hodnota.

// Zadání 1:
// Z proměnné `cislo` udělej stavovou proměnnou.
// Nezapomeň na všechno, co musíš udělat, když chceš použít useState.

// Zadání 2:
// Nastav, aby jednotlivá tlačítka měnila stav `cislo`
// Tlačíítko +1 aby přičítalo jedničku, +5 přičítalo pětku,
// tlačítko Vynulovat nastavovalo číslo na nulu apod.

const Pocitadlo = () => {

	const [cislo, setCislo] = useState(0);

	const zvetsiCislo = (oKolik) => {
		oKolik==0 ? setCislo(0) : setCislo(cislo + oKolik)
	}

	return (
		<>
			<h3>Počítadlo: {cislo}</h3>
			<button onClick={ () => { zvetsiCislo(-5) }}>-5</button>
			<button onClick={ () => { zvetsiCislo(-1) }}>-1</button>
			<button onClick={ () => { zvetsiCislo(0) }}>Vynulovat</button>
			<button onClick={ () => { zvetsiCislo(1) }}>+1</button>
			<button onClick={ () => { zvetsiCislo(5) }}>+5</button>
		</>
	)
}

const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}

export default Uloha2;