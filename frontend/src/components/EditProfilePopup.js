import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    /*подписываюсь и получаю значение контекста*/
    const currentUser = useContext(CurrentUserContext);
    /*переменные состояния имя и работа*/
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

/*используем эффект */
    useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser, isOpen]);

    /*Функции изменения инпутов*/
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }
    /*функция саббмита формы профиля*/
    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            onClose={onClose}
            isOpen={isOpen}
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            children={
                <>
                    <input value={name || ''} onChange={handleChangeName} id="name" type="text" name="name" placeholder="Имя"
                        className="form__field form__field_input_name" required minLength="2" maxLength="40" />
                    <span id="name-error" className=""></span>
                    <input value={description || ''} onChange={handleChangeDescription} id="job" type="text" name="job" placeholder="Профессиональная деятельность"
                        className="form__field form__field_input_job" required minLength="2" maxLength="200" />
                    <span id="job-error" className=""></span>
                </>
            }
        />
    )
}

export default EditProfilePopup;