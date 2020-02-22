import React, { FunctionComponent, ReactElement, ReactNode, FormEvent, ReactNodeArray } from 'react'
import './styles.scss';

type FormProps = {
  onSubmit: (event: FormEvent<HTMLElement>) => void,
  children: ReactNode | ReactNodeArray
}

const Form: FunctionComponent<FormProps> = ({
  onSubmit,
  children,
}): ReactElement => {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  )
}

export default Form;
