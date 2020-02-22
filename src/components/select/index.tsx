import React, { FunctionComponent, ReactElement, useState } from 'react';
import classnames from 'classnames'
import './styles.scss';

import Button from '../button';

type SelectProps = {
  name: string,
  value: string,
  options: Array<string | number>,
  onChange: (value: string) => any,
}

const Select: FunctionComponent<SelectProps> = ({
  name,
  value,
  options,
  onChange,
}): ReactElement => {
  const [isOpen, setOpen] = useState(false);

  const toggleSelect = () => {
    setOpen(!isOpen);
  };

  const handleClick = (value: string) => {
    toggleSelect();
    onChange(value);
  }
  
  const classes = classnames('select__options', {
    'select__options--open': isOpen,
  });
  
  return (
    <div className="select">
      <input type="hidden" name={name} value={value} />
      <Button color="tertiary" onClick={toggleSelect}>
        {value}
      </Button>
      <ul className={classes}>
        {options.map((item, key) => (
          <li
            className="select__option"
            onClick={() => handleClick(item)}
            key={key}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select;
