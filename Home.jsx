import  { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import './Home.css'; // Make sure you have this file or remove if unnecessary
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
   const [category,setCategory] = useState("All");
    return (
       
            <div>
                <Header />
                <ExploreMenu category={category} setCategory={setCategory} />
                <FoodDisplay category={category}/>
                <AppDownload/>
            </div>
       
    );
};

export default Home;
