import React, { ReactElement, FunctionComponent, ReactNode, ReactNodeArray } from 'react'
import './styles.scss';

type LayoutProps = {
  children: ReactNode | ReactNodeArray
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => (
  <main className="layout">
    {children}
  </main>
)

export default Layout
