import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import { Theme, makeStyles } from '@material-ui/core/styles'
import React, { useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'

import bannerState from '~/atoms/bannerState'

interface StyleProps {
  bannerHeight?: number // including <Divider>
}

const useStyles = makeStyles<Theme, StyleProps, 'Offset'>({
  Offset: {
    height: ({ bannerHeight }) => bannerHeight,
  },
})

const BannerContainer: React.FC = () => {
  const [banner] = useRecoilState(bannerState)
  const [height, setHeight] = useState<number | null>(null)
  const jssClasses = useStyles({ bannerHeight: height ?? undefined })

  const ref = useCallback<React.RefCallback<HTMLDivElement>>((node) => {
    const rect = node?.getBoundingClientRect()

    if (rect === undefined) {
      return
    }

    setHeight(rect.height)
  }, [])

  if (banner === null) {
    return null
  }

  return (
    <>
      <Box position="fixed" width="100%">
        <div ref={ ref }>
          { banner }
          <Divider />
        </div>
      </Box>
      <div className={ jssClasses.Offset } />
    </>
  )
}

export default BannerContainer