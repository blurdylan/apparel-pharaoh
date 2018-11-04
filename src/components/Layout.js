import { Box, Grommet } from 'grommet'
import { dark, grommet, hpe } from 'grommet/themes'
import { injectGlobal } from 'styled-components'
import React from 'react'

import siteConfig from '../../site-config'

import { siteTheme } from '../site-theme'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

injectGlobal`
  img {
    border-radius: 8px;
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a:hover {
    opacity: 0.9;
  }
`

const THEMES = {
  grommet,
  hpe,
  dark
}

export default props => {
  return (
    <Grommet theme={THEMES[siteConfig.theme || 'grommet']}>
      <Grommet theme={siteTheme}>
        <Box style={{ minHeight: '100vh' }} responsive align='center'>
          <SiteHeader />
          <main>
            <Box width='large'>{props.children}</Box>
          </main>
        </Box>
        <SiteFooter />
      </Grommet>
    </Grommet>
  )
}
