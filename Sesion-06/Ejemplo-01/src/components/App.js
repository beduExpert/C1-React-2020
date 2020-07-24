import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Cabeza from './Cabeza';
import Cuerpo from './Cuerpo';

const App = () => {
	return (
		<BrowserRouter>
			<div className="margen">
				<Header />

				<Route exact path="/" component={Cabeza} />
				<Route exact path="/cuerpo" component={Cuerpo} />
				<Route exact path="/juntos">
					<Cabeza />
					<Cuerpo />
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