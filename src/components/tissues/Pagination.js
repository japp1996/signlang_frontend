import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function Pagination(props) {

	const select = async (url) => {
		props.getWords(url)
	}

	return (
		<MDBPagination circle className='mb-0'>

			{
				props.content.links &&
				props.content.links.map((link, i) => {
					return (
						<MDBPaginationItem 
							key={i}
							active={link.active}
							onClick={() => select(link.url)}
						>
						  <MDBPaginationLink
						  	href='#'
						  	aria-disabled={link.url ? true : false}
						  >
						  	{link.label}
						  </MDBPaginationLink>
						</MDBPaginationItem>
					)
				})
			}

			<br/>
		</MDBPagination>
	);
}