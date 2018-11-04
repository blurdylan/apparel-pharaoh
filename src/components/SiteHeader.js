import { Box, Heading, Image } from 'grommet'
import { Link } from 'gatsby'
import React from 'react'

import siteConfig from '../../site-config'

export default () => (
  <header>
    <Box direction='row-responsive'>
      <Box align='start'>
        <Image
          fit='contain'
          size='small'
          alt='apparel pharaoh logo'
          style={{ width: 50 }}
          src={siteConfig.logo}
        />
      </Box>
      <Box align='start'>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none'
          }}
          to='/'
        >
          <Heading textAlign='start' color='brand' margin='small'>
            {siteConfig.title}
          </Heading>
        </Link>
      </Box>
    </Box>
  </header>
)
