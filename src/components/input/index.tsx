import React, { ReactElement, ChangeEvent, FunctionComponent, ReactNode } from 'react'
import './styles.scss';
import { ReactNodeArray } from 'prop-types';

type InputProps = {
  type?: string,
  id?: string,
  placeholder?: string,
  autocomplete?: 'on' | 'off',
  error?: string,
  iconLeft?: ReactNode | ReactNodeArray,
  iconRight?: ReactNode | ReactNodeArray,
  value: any,
  name: string,
  onChange: (value: string) => void
}

const Input: FunctionComponent<InputProps> = ({
  type = 'input',
  id = '',
  placeholder = '',
  autocomplete = 'off',
  error = '',
  name,
  iconLeft,
  iconRight,
  value,
  onChange,
}): ReactElement => {
  return (
    <div className="input__wrapper">
      <input
        className="input__box"
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autocomplete}
        name={name}
        onChange={event => onChange(event.target.value)}
        value={value}
      />
      {!!iconLeft && (
        <div className="input__icon input__icon--left">{iconLeft}</div>
      )}
      {!!iconRight && (
        <div className="input__icon input__icon--right">{iconRight}</div>
      )}
      {error && <p className="input__error">{error}</p>}
    </div>
  )
}

export default Input;
