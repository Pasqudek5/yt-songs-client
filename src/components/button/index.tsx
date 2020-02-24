import React, { FC, ReactElement, MouseEvent, ReactNode } from 'react'
import classnames from 'classnames';
import './styles.scss';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | false,
  type?: 'button' | 'submit',
  className?: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  children: ReactNode
}

const Button: FC<ButtonProps> = ({
  color = false,
  type = 'button',
  className = '',
  onClick,
  children,
}): ReactElement => {
  const classes = classnames('button', className, {
    ['button--primary']: color === 'primary',
    ['button--secondary']: color === 'secondary',
    ['button--tertiary']: color === 'tertiary',
    ['button--accent']: color === 'accent',
  })
  
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;

