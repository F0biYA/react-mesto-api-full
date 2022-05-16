import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({onCardClick, onCardLike, onCardDelete, card}) {

const currentUser = React.useContext(CurrentUserContext);

/*Определяем, являемся ли мы владельцем текущей карточки*/
const isOwn = card.owner === currentUser._id;

/*Создаём переменную, которую после зададим в `className` для кнопки удаления*/
const cardDeleteButtonClassName =  isOwn ? 'card__button-delete' : 'card__button-delete_hide';

 /*Определяем, есть ли у карточки лайк, поставленный текущим пользователем*/
const isLiked = card.likes.some(i => i === currentUser._id);

/*Создаём переменную, которую после зададим в `className` для кнопки лайка*/
const cardLikeButtonClassName = isLiked ? 'card__button-heart  card__button-heart_active' : 'card__button-heart';

/*функции по клику на элементы*/
    function handleClick() {
       onCardClick(card);
    }

    function handleLike() {
        onCardLike(card);
    }

    function handleDelete() {
        onCardDelete(card);
    }

    return (
        <div className="card">
            <img onClick={handleClick} src={card.link} alt={card.name} className="card__image" />
            <div className="card__caption">
                <h2 className="card__text">{card.name}</h2>
                <div className="card__like-box">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLike}></button>
                    <span className="card__like-amount">{card.likes.length}</span>
                </div>
                <button type="button" className={cardDeleteButtonClassName} onClick={handleDelete}></button>
            </div>
        </div>

    )
}

export default Card;