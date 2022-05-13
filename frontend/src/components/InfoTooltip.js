import React from 'react';
import statusFail from '../images/denied.svg';
import statusOk from '../images/success.svg';

/*компонет всплывающего окна*/
function InfoTooltip({ onClose, isOpen, status }) {
    return (
        <div className={isOpen ? `popup popup_opened` : `popup`}>
            <div className="popup__container">
                <button
                    onClick={onClose}
                    className="popup__button-close"
                    type="button"
                />
                <img
                    className="popup__info-image"
                    src={status ? statusOk : statusFail}
                    alt="Статус"
                />
                <h2 className="popup__text">
                    {status
                        ? "Вы успешно зарегистрировались!"
                        : "Что-то пошло не так! Попробуйте ещё раз."
                    }
                </h2>
            </div>
        </div>
    )
}
export default InfoTooltip;