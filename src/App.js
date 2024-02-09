import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import {Routes, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Login from './components/Login';
import SignUp from './components/Signup';
import axios from 'axios';
import PageNotFound from './components/PageNotFound';
import Enquiries from './components/Enquiries';



function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)

  let [houseData, setHouseData] = useState([])

  //fetch
  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/houses')
      console.log(response)
      console.log(response.data)
      setHouseData(response.data)
    }
    fetchData()
  }
  , [])
 
  return (
    <div className="container-fluid">
        <Header />
        <SearchFilter allHouses={houseData} />
        

        <Routes>
          <Route path='/' element={<House houseInfo={houseData[4]} />} />
        <Route path='/searchresults/:county' element={<SearchResults allHouses={houseData} />} />
        <Route path='/searchedhouse/:id' element={<SearchedHouse allHouses={houseData} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element= {<SignUp />}/>
        <Route path='/enquiries' element={<Enquiries />} />
        <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
