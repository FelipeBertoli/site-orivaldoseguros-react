import React, { useState } from 'react';
import "./style.css";
import InputLabel from '../texts/InputLabel';
import Tooltip from '../messages/Tooltip';

/**
 * Props do Componente
 * @param {string} trailIcon: ícone do componente
 * @param {string} label: rótulo do componente
 * @param {string} message: mensagem de ajuda, erro ou aviso
 * @param {function} onChange: função de callback ao alterar o valor
 * @param {string} placeholder: texto de sugestão no campo de input
 * @param {boolean} required: define se o campo é obrigatório
 * @param {string} type: tipo do componente - e-mail, password, text (default)
 * @param {string} value: valor do componente
 */

export default function TextInput({ trailIcon, label, message, onChange, placeholder, required = false, type = 'text', value, width }) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  function formatPhone(value) {
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }


  return (
    <div className={`text-input ${type} ${width}`}>
      {label != null && <InputLabel label={label} required={required} />}

      <div className={`text-input-box`}>
        {type === 'textarea' ? (
          <textarea
            className='text-input-field'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            maxLength={1000}
          />
        ) : (
          <input
            className='text-input-field'
            placeholder={placeholder}
            type={inputType}
            value={type === 'tel' ? formatPhone(value || '') : value}
            onChange={(e) => {
              const inputValue = type === 'tel' ? e.target.value.replace(/\D/g, '') : e.target.value;
              onChange({ target: { value: inputValue } });
            }}
            maxlength={type === 'tel' ? 15 : 50}
            required={required}
          />

        )}


        {trailIcon != null && type !== 'password' && (
          <i className={`fi ${trailIcon} text-input-icon`}></i>
        )}

        {type === 'password' && (
          <i
            className={`fi ${showPassword ? 'fi-ss-eye-crossed' : 'fi-ss-eye'} text-input-icon`}
            onClick={() => setShowPassword(prev => !prev)}
            style={{ cursor: 'pointer' }}
          ></i>
        )}
      </div>

      {message != null && <Tooltip message={message} />}
    </div>
  );
}
