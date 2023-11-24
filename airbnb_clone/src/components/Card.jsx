import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

/* Connditional rendering

Using the True and True - {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
if first conditions is false, it results in false

*/