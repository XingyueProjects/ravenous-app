import React from "react";
import Business from "../Business/Business";
import businessData from "../BusinessData/BusinessData";
import './BusinessList.css'
 

function BusinessList({businesses}){
    return(
        <div>
            {businesses.map((business) => {
              return  <Business business={business} key={business.id} />
            }
      )}
        
        </div>
    )
}

export default BusinessList;