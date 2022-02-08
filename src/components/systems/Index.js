import React, {useState, useEffect} from 'react';
import Navbar from '../tissues/Navbar';
import Search from '../tissues/Search';
import GroupCards from '../organs/GroupCards';
import Footer from '../tissues/Footer';
import Constants from '../constants';
import { MDBContainer } from 'mdb-react-ui-kit';

export default function Index() {
	const [words , setWords] = useState({data:[]});

	const getWords = async (url = Constants.urlBackend + "api/words") => {
		const response = await fetch(url)
		.then((response) => response.json());
		// update the state
		setWords(response);
	};

	const getSearch = async (text) => {
		const response = await fetch(Constants.urlBackend + "api/word/" + text)
		.then((response) => response.json());
		setWords(response);
		console.log("Index >> words", words)
	}

	useEffect(() => {
		getWords();
	}, []);

	return(
		<div className="App">
			<Navbar/>
			<MDBContainer>
				<Search words={words} getSearch={getSearch}/>
				<GroupCards words={words} getWords={getWords}/>
			</MDBContainer>
			<Footer/>
	    </div>
	);
}