import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react'
import classnames from 'classnames';
import './styles.scss';

type FlexProps = {
  row?: boolean,
  col?: boolean,
  center: boolean,
  className?: string,
  children: ReactNode
}

const Flex: FunctionComponent<FlexProps> = ({
  row,
  col,
  center,
  className = '',
  children,
  ...props
}): ReactElement => {
  const classes = classnames('flex', className, {
    'flex--row': row,
    'flex--col': col,
    'flex--center': center
  });
  
  return <div {...props} className={classes}>{children}</div>
}

export default Flex;
