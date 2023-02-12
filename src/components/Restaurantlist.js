import {RESTAURANTCARD_IMG_CDN} from '../config'
import {Link} from 'react-router-dom'

const Restaurantcard=({name,cuisines,maxDeliveryTime,cloudinaryImageId})=>{
    return(
        <div className='restaurantcard'>
            <img className='restaurantcard-img' src={RESTAURANTCARD_IMG_CDN+cloudinaryImageId} alt="restaurantLogo"/>
            <h2>{name}</h2>
            <span>{cuisines.join(',')}</span>
            <h5>max delivery time:- {maxDeliveryTime}</h5>
        </div>
    )
}

const Restaurantlist=(props)=>{
    return(
        <div className='restaurantlist'>

        {
        props.cards.map((restaurant)=>{
            return (
                <Link to={'/restaurant/'+restaurant.data.id} key={restaurant.data.id}>
                    <Restaurantcard {...restaurant.data} />
                </Link>
            )
        })
        }

        </div>
    )
}

export default Restaurantlist;