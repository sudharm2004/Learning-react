const Shimmer = () => {
  return (
    <div className="shimmer-restaurantlist">
        {
            Array(20).fill("").map((e,index)=>{
                return <div className="shimmer-restaurantcard" key={index}>
        <div className="shimmer-restaurantcard-img"></div>
        <div className="shimmer-restaurantcard-bold-text"></div>
        <div className="shimmer-restaurantcard-light-text"></div>
        <div className="shimmer-restaurantcard-light-text"></div>
        <div
          className="shimmer-restaurantcard-light-text"
          style={{ width: "50%" }}
        ></div>
      </div>
            })
        }
      
    </div>
  );
};

export default Shimmer;
