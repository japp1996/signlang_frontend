import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Pagination from '../tissues/Pagination';
import Card from '../tissues/Card';

export default function GroupCards(props) {

  return (
    <MDBContainer>
      <MDBRow>

        {
          props.words.data &&
          props.words.data.map((w, i) => {
            return(
              <MDBCol key={i} md="4">
                <Card
                  urlVideo={w.video.url}
                  title={w.name}
                  start={w.start}
                  end={w.end}
                  category={w.word_category.name}
                />
              </MDBCol>
            );
          })
        }

        {
          props.words.data.length === 0 &&
          <h1> No hay resultados </h1>
        }

        {
          props.words &&
          <Pagination 
            content={props.words}
            getWords={props.getWords}
          />
        }

      </MDBRow>
      <br/>
    </MDBContainer>
  )
}