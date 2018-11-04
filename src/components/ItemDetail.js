import { Add } from 'grommet-icons'
import { Box, Button, Heading, Image, Text } from 'grommet'
import React from 'react'

export default props => {
  return (
    <div className='details'>
      <Box
        animation='fadeIn'
        direction='row-responsive'
        margin={{ top: 'small' }}
        pad='large'
      >
        <Box height='medium' width='medium' pad='medium'>
          <Image src='https://loremflickr.com/500/500/trouser' fit='cover' />
        </Box>

        <Box align='baseline' margin={{ left: 'small' }} pad='medium'>
          <Heading level='2'>{props.title}</Heading>
          <Text weight='bold' size='xxlarge'>
            Sick Pants
          </Text>
          <Text margin={{ top: 'small' }} size='large'>
            $478
          </Text>
          <Text margin={{ top: 'small' }} size='large'>
            CX5558
          </Text>
          <Box margin={{ top: 'large' }} align='start'>
            <Button icon={<Add />} label='Add To Cart' onClick={() => {}} />
          </Box>
        </Box>
      </Box>
    </div>
  )
}
