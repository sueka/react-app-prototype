import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import { Theme, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useRecoilState } from 'recoil'

import notificationsState from '~/atoms/notificationsState'
import LocaleSelect from '~/components/LocaleSelect' // TODO
import NotificationList from '~/components/NotificationList'
import Spacer from '~/components/Spacer'
import ToggleDarkButton from '~/components/ToggleDarkButton'
import IntlProviderContext from '~/contexts/IntlProviderContext'
import useRefsMerged from '~/hooks/useRefsMerged'
import useScreen from '~/hooks/useScreen'
import classes from './classes.css'
import messages from './messages'

interface Props {
  onMenuIconButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

interface StyleProps {
  topAppbarHeight?: number
}

const useStyles = makeStyles<Theme, StyleProps, 'Offset'>({
  Offset: {
    height: ({ topAppbarHeight }) => topAppbarHeight,
  },
})

const TopAppbar = React.forwardRef<HTMLDivElement, Props>(({ onMenuIconButtonClick }, forwardedRef) => {
  const { width: screenWidth } = useScreen()
  const { dir } = useContext(IntlProviderContext)
  const [height, setHeight] = useState<number | null>(null)

  const ownRef = useCallback<React.RefCallback<HTMLDivElement>>((node) => {
    // To silence the ESLint rule react-hooks/exhaustive-deps
    if (screenWidth === null) {
      return
    }

    const rect = node?.getBoundingClientRect()

    if (rect === undefined) {
      return
    }

    setHeight(rect.height)
  }, [screenWidth])

  const ref = useRefsMerged(forwardedRef, ownRef)

  const jssClasses = useStyles({ topAppbarHeight: height ?? undefined })

  const [notifications] = useRecoilState(notificationsState)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const anchor = React.useRef<HTMLButtonElement | null>(null)

  const handleNotificationsShow = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    if (notifications.length !== 0) {
      setNotificationsOpen(true)
    }
  }, [notifications])

  const handleNotificationsClose = useCallback(() => {
    setNotificationsOpen(false)
  }, [])

  useEffect(() => {
    if (notifications.length === 0) {
      setNotificationsOpen(false)
    }
  }, [notifications])

  return (
    <>
      <AppBar position="fixed" ref={ ref }>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={ onMenuIconButtonClick }>
            <MenuIcon />
          </IconButton>
          <Spacer />
          <Box mx={ 1 }>
            <ToggleDarkButton />
            { 'Notification' in globalThis && <>
              <Tooltip
                title={ <FormattedMessage { ...messages.showNotifications } /> }
                disableFocusListener={ notifications.length === 0 }
                disableHoverListener={ notifications.length === 0 }
                disableTouchListener={ notifications.length === 0 }
              >
                <span className={ classes.TooltipWrapper }>
                  <IconButton color="inherit" onClick={ handleNotificationsShow } ref={ anchor } disabled={ notifications.length === 0 }>
                    <Badge color="secondary" badgeContent={ notifications.length }>
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </span>
              </Tooltip>
              { notifications.length !== 0 && <Popover
                open={ notificationsOpen }
                onClose={ handleNotificationsClose }
                anchorEl={ anchor.current }
                anchorOrigin={ {
                  horizontal: dir === 'ltr' ? 'right' : 'left',
                  vertical: 'bottom',
                } }
                transformOrigin={ {
                  horizontal: dir === 'ltr' ? 'right' : 'left',
                  vertical: 'top',
                } }
              >
                <NotificationList />
              </Popover> }
            </> }
          </Box>
          <LocaleSelect
            classes={ {
              label: classes.LocaleSelectLabel,
              input: classes.LocaleSelectInput,
              selectIcon: classes.LocaleSelectSelectIcon,
              inputUnderline: classes.LocaleSelectInputUnderline,
            } }
            FormControlProps={ {
              variant: 'filled',
            } }
          />
        </Toolbar>
      </AppBar>
      <div className={ jssClasses.Offset } />
    </>
  )
})

export default TopAppbar
