import React, {useState, useEffect} from 'react';
import Navbar from '../tissues/Navbar';
import Search from '../tissues/Search';
import GroupCards from '../organs/GroupCards';
import Footer from '../tissues/Footer';
import { MDBContainer } from 'mdb-react-ui-kit';

export default function Index() {
	const [words , setWords] = useState({data:[]});

	const getWords = async (url = "http://localhost:8000/api/words") => {
		const response = await fetch(url)
		.then((response) => response.json());
		// update the state
		setWords(response);
	};

	const getSearch = async (text) => {
		const response = await fetch("http://localhost:8000/api/word/" + text)
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