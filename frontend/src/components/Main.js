import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, onCardClick, onCardLike, onCardDelete, onEditProfile, onAddPlace, onEditAvatar }) {
    /*подписываюсь  и получаю значение контекста*/
    const currentUser = useContext(CurrentUserContext);
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__block">
                    <div className="profile__image-block">
                        <img onClick={onEditAvatar} className="profile__image" src={currentUser.avatar} alt="Фото Профиля" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__button-edit">
                        </button>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                    <button onClick={onAddPlace} type="button" className="profile__button-add">
                    </button>
                </div>
            </section>
            <section className="cards">{
                cards.map((card) => {
                    return (<Card
                        onCardClick={onCardClick}
                        card={card}
                        key={card._id}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />)
                })
            }
            </section>
        </main>
    )
}
export default Main;