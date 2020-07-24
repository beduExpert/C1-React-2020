import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Hojas from './Hojas';
import Cocos from './Cocos';
import Tronco from './Tronco';

const App = () => {
	return (
		<BrowserRouter>
			<div className="margen">
				<Header />

				<Route exact path="/">
					¿Qué va a llevar?
				</Route>

				<Route exact path="/hojas" component={Hojas} />
				<Route exact path="/cocos" component={Cocos} />
				<Route exact path="/tronco" component={Tronco} />

				<Route exact path="/palmera">
					<Hojas />
					<Cocos />
					<Tronco />
				</Route>
			</div>
		</BrowserRouter>
	);
};

export default App;


// <BrowserRouter basename="/#/home">
// 	{/* The upper line is to match singleSPA routes */}
// 	<Theme>
// 		<Header />
// 		<Body>
// 			<Route exact path={PATHS.home} component={Home} />
// 			<Route exact path={PATHS.scan} component={QRScanner} />
// 			<Route exact path={PATHS.details} component={DetailsBase} />
// 			<Route exact path={PATHS.results} component={Results} />
// 			<Route exact path={PATHS.messages} component={Messages} />
// 			<Route exact path={PATHS.comingSoon} component={Coming} />
// 			<Route exact path={PATHS.milestones} component={Milestones} />
// 			<Route exact path={PATHS.notifications} component={Notifications} />
// 		</Body>
// 	</Theme>
// </BrowserRouter>