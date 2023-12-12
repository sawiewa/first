export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
	const ButtonsContariner = buttonsContainer;
	return (
		<>
			<ButtonsContariner>{buttons}</ButtonsContariner>
			{children}
		</>
	);
}

// możemy użyc niestandardowego elementu, czyli np. zamiast <di>, <menu>, <ul>
//przekazać niestandardowy element tutaj const ButtonsContariner = buttonsContainer i przekazać go jako props w miejscu gdzie uzywamy komp Tabs
//konieczne jest zadeklarowanie zmiennej z Wielkiej litery jako niest komp  const ButtonsContariner = buttonsContainer

//<buttonsContainer>{buttons}</buttonsContainer> NIE ZADZIAŁA

//TO JEST WZORZEC DO DYNAMICZNEGO PRZEKAZYWANIA WRAPERA JAKIM MOZEMU OPAKOWAC INNY KOMPONENT
//nie mamy narzuconego czym są opakowane buttony


//zamiast deklarować w zmiennej const const ButtonsContariner = buttonsContainer; = buttonsContainer;
//można w propsach użyc od razu z wielkiej litery const ButtonsContariner = buttonsContainer;
//({ children, buttons, ButtonsContariner = 'menu' })
// i wtedy nez zmiennej użyć w jsx
//<>
//{/* <ButtonsContariner>{buttons}</ButtonsContariner>
//{children}
//</> */}
