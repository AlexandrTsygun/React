import React, { useState } from 'react';
import './StateLifting.scss';

function Input() {

  const [defaultValue, setDefaultValue] = useState("");
  const [focusValue, setFocusValue] = useState("");
  const [activeValue, setActiveValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [errorValue, setErrorValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ defaultValue, focusValue, activeValue, disabledValue, errorValue });
  };

  return (
    <div className="inputWrap">
      <form onSubmit={handleSubmit}>

        <div className="input-item">
          <label>Обычное поле:</label>

          <input className="default"
            type="text"
            value={defaultValue}
            onChange={(e) => setDefaultValue(e.target.value)}
            placeholder="Попробуйте ввести текст"
          />

        </div>

        <div className="input-item">
          <label>Поле в фокусе:</label>

          <input className="focus"
            type="text"
            value={focusValue}
            onChange={(e) => setFocusValue(e.target.value)}
            onFocus={() => console.log("Поле в фокусе")}
            placeholder="Кликните сюда"
          />

        </div>

        <div className="input-item">
          <label>Активное поле:</label>

          <input className="active"
            type="text"
            value={activeValue}
            onChange={(e) => setActiveValue(e.target.value)}
            placeholder="Введите текст"
          />

        </div>

        <div className="input-item">
          <label>Отключённое поле:</label>

          <input className='disabled'
            type="text"
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            placeholder="Недоступно для ввода"
            disabled
          />

        </div>

        <div className="input-item">
          <label>Поле с ошибкой:</label>

          <input className="error"
            type="text"
            value={errorValue}
            onChange={(e) => setErrorValue(e.target.value)}
            placeholder="Что-то пошло не так"
          />

          <span className="error-message">Ошибка ввода!</span>
        </div>

					<button type="inputItemButton">Отправить данные</button>

      </form>
    </div>
  );
}

export default Input;