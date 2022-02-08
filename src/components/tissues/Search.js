import React, {useState} from 'react';
import ButtonSearch from '../cells/ButtonSearch';
import InputSearch from '../cells/InputSearch';
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

export default function Search(props) {
	const [text, setText] = useState("");

	const search = async (text) => {
		props.getSearch(text)
	}

	const inputChange = e => {
		setText(e.target.value)
	}

	return(
		<React.StrictMode>
			<MDBContainer>
				<MDBRow>
					<MDBCol md='6' offsetMd='3'>
						<InputSearch label="Ingrese una palabra, letra o frase" inputChange={inputChange} id="input-search" value={text}/>
					</MDBCol>
					<MDBCol md='12'>
						<ButtonSearch text="Buscar" word={text} search={search}/>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<br/>
		</React.StrictMode>
	);
}