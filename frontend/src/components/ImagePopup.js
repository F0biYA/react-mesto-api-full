import React from "react";

function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup ${card && 'popup_opened'}`}>
            <div className="popup__image-container">
                <button onClick={onClose} type="button" className="popup__button-close_image popup__button-close">
                </button>
                <img src={card && card.link} alt={card && card.name} className="popup__image" />
                <p className="popup__image-caption">{card && card.name}</p>
            </div>
        </div>);
}
export default ImagePopup;
