import React, { ReactElement, FunctionComponent } from 'react'
import './styles.scss';

type IconProps = {
  alt?: string,
  className?: string
  src: string,
}

const Icon: FunctionComponent<IconProps> = ({
  alt = '',
  className = '',
  src,
}): ReactElement => <img className={className} src={src} alt={alt} />

export default Icon;
