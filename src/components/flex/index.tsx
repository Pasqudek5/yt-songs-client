import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  ReactNodeArray,
} from 'react'
import classnames from 'classnames';
import './styles.scss';

type FlexProps = {
  row?: boolean,
  col?: boolean,
  classNames?: string,
  children: ReactNode | ReactNodeArray
}

const Flex: FunctionComponent<FlexProps> = ({
  row,
  col,
  classNames = '',
  children,
}): ReactElement => {
  const classes = classnames('flex', classNames, {
    'flex--row': row,
    'flex--col': col,
  });
  
  return <div className={classes}>{children}</div>
}

export default Flex;
