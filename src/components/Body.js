import Restaurantlist from "./Restaurantlist"
import { useState , useEffect } from "react"
import Shimmer from "./Shimmer";

const Body=()=>{



    const [searchTxt,setsearchTxt]=useState('Enter the dish name');
    const [allCards,setallCards]=useState();
    const [filteredCards,setfilteredCards]=useState();

    const filterCards=()=>{
        const filteredData=filteredCards.filter((element)=>{
            return element.data.name.toLowerCase()?.includes(searchTxt.toLowerCase())
        })
        setfilteredCards(filteredData);
    }

    async function getCardData(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6248966&lng=73.8566087&page_type=DESKTOP_WEB_LISTING");
        const result=await data.json();
        setfilteredCards(result?.data?.cards[2].data?.data?.cards)
        setallCards(result?.data?.cards[2].data?.data?.cards);
    }

    useEffect(()=>{
        getCardData();
    },[])
    


    return (
        <div className="Body">
        {/* <Shimmer/> */}
        <div className="Search-container">
            <input type="text" className="Search-Btn" onChange={(e)=>{setsearchTxt(e.target.value)}} placeholder="Enter the Restaurant"/>
            <button onClick={filterCards} onBlur={()=>{setfilteredCards(allCards)}}>Search Restaurant</button>
        </div>

        {filteredCards===undefined?<Shimmer/>:<Restaurantlist cards={filteredCards}/>}
        
        </div>
    )
} 

export default Body