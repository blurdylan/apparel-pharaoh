import { Box, Grid, Heading, Image } from 'grommet'
import React from 'react'

export default props => {
  return (
    <div className='recommended'>
      <hr />
      <Heading level='3'>Recommended For You</Heading>
      <Box
        animation='fadeIn'
        direction='row-responsive'
        margin={{ top: 'small', bottom: 'large' }}
      >
        <Grid
          columns={{
            count: 4,
            size: 'auto'
          }}
          gap='small'
        >
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=90' fit='cover' />
          </Box>
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=95' fit='cover' />
          </Box>
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=45' fit='cover' />
          </Box>
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=15' fit='cover' />
          </Box>
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=12' fit='cover' />
          </Box>
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=30' fit='cover' />
          </Box>
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=50' fit='cover' />
          </Box>
          <Box height='small' width='small'>
            <Image src='https://picsum.photos/200/?image=80' fit='cover' />
          </Box>
        </Grid>
      </Box>
    </div>
  )
}
