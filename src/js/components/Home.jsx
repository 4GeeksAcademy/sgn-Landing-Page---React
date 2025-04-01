import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="text-left">
			<Navbar />
			<Jumbotron />
			<div className="row row-cols-1 row-cols-md-2 g-4">
				<Card title={"Card tittle"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis orci non viverra condimentum. Etiam cursus in ex ac tincidunt."} imageUrl={rigoImage} buttonUrl={"https://4geeks.com/es/choose-program"} buttonLabel={"Primer Botón"}/>
				<Card title={"Card tittle"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis orci non viverra condimentum. Etiam cursus in ex ac tincidunt. "} imageUrl={rigoImage} buttonUrl={"https://4geeks.com/es/choose-program"} buttonLabel={"Srgundo Botón"} />
				<Card title={"Card tittle"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis orci non viverra condimentum. Etiam cursus in ex ac tincidunt."} imageUrl={rigoImage} buttonUrl={"https://4geeks.com/es/choose-program"} buttonLabel={"Tercer Botón"} />
				<Card title={"Card tittle"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis orci non viverra condimentum. Etiam cursus in ex ac tincidunt."} imageUrl={rigoImage} buttonUrl={"https://4geeks.com/es/choose-program"} buttonLabel={"Cuarto Botón"} />

			</div>
			<Footer/>





		</div>
	);
};

export default Home;