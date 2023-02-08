import Restaurantlist from "./Restaurantlist"
import {restaurantData} from '../config'
import { useState } from "react"

const Body=()=>{
    const [searchTxt,setsearchTxt]=useState('Enter the dish name');
    const [cards,setcards]=useState(restaurantData);

    const filterData=()=>{
        const filteredData=cards.filter((element)=>{return element.data.name.includes(searchTxt)})
        setcards(filteredData);
    }

    return (
        <>
        <div className="Search-container">
            <input type="text" className="Search-Btn" onChange={(e)=>{setsearchTxt(e.target.value)}}/>
            <button onClick={filterData} onBlur={()=>{setcards(restaurantData)}}>Search Restaurant</button>
        </div>
        <Restaurantlist cards={cards}/>
        </>
    )
} 

export default Body