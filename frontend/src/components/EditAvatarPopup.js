import React, { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    /*прямой доступ к элементу инпута и его значению*/
    const avatarRef = useRef();

    /*функция самбита*/
    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }
    useEffect(() => {
        avatarRef.current.value = ''
      }, [isOpen])

    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            onClose={onClose}
            isOpen={isOpen}
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            children={
                <>
                    <input ref={avatarRef} id="avatar" className="form__field form__field_input_avatar"
                        type="url" name="link" placeholder="Ссылка на аватар" required
                    />
                    <span id="avatar-error" className="form__error"></span>
                </>
            }
        />
    )
}

export default EditAvatarPopup;