import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    /*Переменные состояния место и ссылки*/
    const [place, setPlace] = useState('');
    const [url, setUrl] = useState('');

    /*функции изменения инпутов */
    function handleChangePlace(e) {
        setPlace(e.target.value);
    }

    function handleChangeUrl(e) {
        setUrl(e.target.value);
    }
    /* функция сабмита*/
    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: place,
            link: url,
        });
    }

    useEffect(() => {
        setPlace('');
        setUrl('')
    }, [isOpen]);

    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            onClose={onClose}
            isOpen={isOpen}
            name="card"
            title="Новое место"
            buttonText="Создать"
            children={
                <>
                    <input value={place} onChange={handleChangePlace} id="place"
                        className="form__field form__field_input_place" type="text" name="place"
                        placeholder="Название" minLength="2" maxLength="30" required
                    />
                    <span className="form__error"></span>
                    <input value={url} onChange={handleChangeUrl} id="link" className="form__field form__field_input_link"
                        type="url" name="link" placeholder="Ссылка на картинку" required
                    />
                    <span className="form__error"></span>
                </>
            }
        />
    )
}

export default AddPlacePopup;