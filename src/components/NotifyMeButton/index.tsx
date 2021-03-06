import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import SendIcon from '@material-ui/icons/Send'
import React, { useCallback, useMemo } from 'react'
import { FormattedMessage } from 'react-intl'
import { useRecoilState } from 'recoil'

import notificationsState from '~/atoms/notificationsState'
import useOnceForEachEffect from '~/hooks/useOnceForEachEffect'
import Notification from '~/polyfills/Notification'
import messages from './messages'

interface Props {
  inputFor: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
}

const NotifyMeButton: React.FC<Props> = ({ inputFor: ref }) => {
  const [notifications, setNotifications] = useRecoilState(notificationsState)
  const disabled = useMemo(() => ref.current === null || /^\p{White_Space}*$/u.test(ref.current.value), [ref.current?.value])

  const handleNotifyButtonClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(async () => {
    const input = ref.current

    if (input === null) {
      return
    }

    const permission = await Notification.requestPermission()

    if (permission === 'granted') {
      setNotifications((ns) => [...ns, new Notification(input.value)])
    }
  }, [ref])

  const handleNotificationClose = useCallback<NonNullable<Notification['onclose']>>((event) => {
    const notification = event.target

    if (!(notification instanceof Notification)) {
      return
    }

    setNotifications((ns) => ns.filter((n) => n !== notification))
  }, [])

  useOnceForEachEffect(notifications, undefined, (notification) => {
    notification.addEventListener('close', handleNotificationClose)
  }, [notifications, handleNotificationClose])

  if (!('Notification' in globalThis)) {
    return null
  }

  return (
    <Tooltip
      title={ <FormattedMessage { ...messages.sendPushNotification } /> }
      disableFocusListener={ disabled }
      disableHoverListener={ disabled }
      disableTouchListener={ disabled }
    >
      <span>
        <IconButton
          onClick={ handleNotifyButtonClick }
          disabled={ disabled }
        >
          <SendIcon />
        </IconButton>
      </span>
    </Tooltip>
  )
}

export default NotifyMeButton
