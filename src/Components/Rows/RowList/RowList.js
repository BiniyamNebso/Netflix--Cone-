import React from 'react';
//import Row from './Row/Row'; 
//import requests from '../../Utils/requests'; 
import Row from '../Row/Row'; // One level up to Rows, then into the Row directory
//import requests from '../../Utils/requests'; // Two levels up to src, then into Utils
import requests from '../../../Utils/requests';



const RowList = () => {
  return (
    <>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
<<<<<<< HEAD
<Row title="TV Shows" fetchUrl={requests.fetchTVShows} />
=======
<Row title="TV Shows" fetchUrl={requests.fetchTVShow} />
>>>>>>> 60532ba24a34c5bc77fc3e3e7f2d9aced3a10c4b
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
