import { Suspense } from 'react';
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Players from './components/Homepage/Players/Players';
import Navbar from './components/Navbar/Navbar'


const fetchPlayer = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const playerPromise = fetchPlayer();
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>

    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playerPromise={playerPromise}></Players>
    </Suspense>
    </>
  )
}

export default App
