import React from 'react'
import resObj from "./resturant";
import ResturantCards from "./ResturantCards";
export default function Body() {
  return (
    <>
    <div className="body">
          <div className="search"><input type="text" placeholder="Search"/></div>
          <div className="resturant-container">
            {/* optional chaining fixes our code */}
            {resObj?.restaurants?.map((restaurant)=>(
              <ResturantCards key={restaurant.id} resData = {restaurant}/>
            ))}
          </div>
        </div>
    </>
  )
}
