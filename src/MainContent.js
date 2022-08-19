import React from "react"
export default function Maincontent(props) {
    return (
        <div className="card">
            <div className="img">
                <img src={props.imgeUrl} alt="" />
            </div>
            <div className="about-card">
                <div className="location">
                    <i class="fa-solid fa-location-dot"></i> <span>{props.location}</span> <a href={props.googlemapsurl}>View on Google Maps</a>
                </div>
                <div className="describe">
                    <h2>{props.title}</h2>
                    <div className="date">
                        <span className="start">{props.startDate}</span> - 
                        <span className="End"> {props.endDate}</span>
                    </div>
                    <div className="describe-text">
                        {props.describe}
                    </div>
                </div>
            </div>
            </div>
        )
}
