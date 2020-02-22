import React, { FunctionComponent, ReactElement } from 'react'
import classnames from 'classnames';
import './styles.scss'

type ListProps = {
  items: string[],
  onClick: (event: any) => void;
  className?: string,
}

const List: FunctionComponent<ListProps> = ({ items, onClick, className }): ReactElement => {
  const classes = classnames('list', className, {

  });

  const handleClick = (event, item) => {
    event.target.value = item;
    onClick(event);
  }
  
  return (
    <ul className="list">
      {items.map((item, id) => (
        <li
          className="list__item"
          onClick={(event) => handleClick(event, item)}
          key={id}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default List;
