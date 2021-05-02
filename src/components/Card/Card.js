import './Card.css';
import React, { useState } from 'react';

export default function Card(props) {
	const [isLiked, setLiked] = useState(false);

	let likeCount = 193;

	return (
		<div className="card">
			<div className="card-header">
				<div className="profile">
					<span className="letter">{props.author[0]}</span>
				</div>
				<div className="card-title-group">
					<h5 className="card-title">{props.title}</h5>
					<div className="card-date">{props.date}</div>
				</div>
			</div>
			<img className="card-image" src={props.image} alt="Logo" />
			<div className="card-text">{props.description}</div>

			<div className="card-like-bar" onClick={() => setLiked(!isLiked)}>
				<img className="card-like-icon" src={isLiked ? props.heartFill : props.heartOutline} alt="Logo" />

				<div className="like-text">
					<b>{likeCount}</b> kişi bu tarifi beğendi.
				</div>
			</div>
		</div>
	);
}
