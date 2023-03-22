
import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {orginals,actions,ComedyMovies,HorrorMovies,Documentaries,RomanceMovies} from'./Urls'


function App() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <RowPost url={orginals} title="Netflix Orginal Movies" />
      <RowPost url={actions} title="Action Movies" isSmall={true} />
      <RowPost url={ComedyMovies} title="Comedy Movies" isSmall={true} />
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall={true} />
      <RowPost url={Documentaries} title="Documentaries" isSmall={true} />
      <RowPost url={RomanceMovies} title="Romance Movies" isSmall={true} />


    </div>
  )
}

export default App;
