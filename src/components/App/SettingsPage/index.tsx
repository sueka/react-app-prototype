import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Switch from '@material-ui/core/Switch'
import SecurityIcon from '@material-ui/icons/Security'
import { useInjection } from 'inversify-react'
import React, { useCallback, useContext } from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage, useIntl } from 'react-intl'
import { useRecoilState } from 'recoil'

import { shouldBePresent } from '~/asserters/commonAsserters'
import cookieConsentObtainedState from '~/atoms/cookieConsentObtainedState'
import darkState from '~/atoms/darkState'
import fullScreenState from '~/atoms/fullScreenState'
import Banner from '~/components/Banner'
import obtainedCookieConsentBannerMessages from '~/components/ObtainCookieConsentBanner/messages' // TODO: Move
import { createPage } from '~/components/PageTemplate'
import ConfigRegistry from '~/config/ConfigRegistry'
import DefaultDarkContext from '~/contexts/DefaultDarkContext'
import cookieDialogKey from '~/globalVariables/cookieDialogKey'
import reloadNotToAcceptCookiesBannerKey from '~/globalVariables/reloadNotToAcceptCookiesBannerKey'
import useBanner from '~/hooks/useBanner'
import useGtm from '~/hooks/useGtm'
import classes from './classes.css'
import messages from './messages'

const SettingsPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const config = useInjection<ConfigRegistry>('EnvVarConfig')
  const gtmContainerId = config.get('GTM_CONTAINER_ID')
  const gtm = useGtm()
  const banner = useBanner()

  const [dark, setDark] = useRecoilState(darkState)
  const [fullScreen, setFullScreen] = useRecoilState(fullScreenState)
  const [cookieConsentObtained, setCookieConsentObtained] = useRecoilState(cookieConsentObtainedState)
  const { defaultDark } = useContext(DefaultDarkContext)

  shouldBePresent(defaultDark)

  const handleDarkThemeChange = useCallback((_event, checked) => {
    setDark(checked)
  }, [])

  const handleFullScreenChange = useCallback((_event, checked) => {
    setFullScreen(checked)
  }, [])

  const handleReload = useCallback(() => {
    location.reload()
  }, [])

  const handleDontReload = useCallback(() => {
    banner.hide({ key: reloadNotToAcceptCookiesBannerKey })
  }, [banner])

  const handleAcceptCookiesChange = useCallback((_event, checked) => {
    setCookieConsentObtained(checked)

    if (checked) {
      if (gtmContainerId !== undefined) {
        gtm.install(gtmContainerId)
      }

      banner.hide({
        key: cookieDialogKey,
        safe: true,
      })

      banner.hide({
        key: reloadNotToAcceptCookiesBannerKey,
        safe: true,
      })
    } else {
      banner.show(<Banner
        leading={ <Avatar>
          <SecurityIcon />
        </Avatar> }
        text={ <FormattedMessage { ...messages.aPageReloadIsRequiredForTheConfigurationChangesToTakeEffect } /> }
        actions={ <>
          <Button variant="text" color="primary" onClick={ handleReload }>
            <FormattedMessage { ...messages.reload } />
          </Button>
          <Button variant="text" color="primary" onClick={ handleDontReload }>
            <FormattedMessage { ...messages.dontReload } />
          </Button>
        </> }
      />, {
        key: reloadNotToAcceptCookiesBannerKey,
      })
    }
  }, [gtm, gtmContainerId, banner, handleReload, handleDontReload])

  return (
    <>
      <Helmet title={ formatMessage(messages.settings) } />
      <Grid container>
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <List
            subheader={ <ListSubheader>
              <FormattedMessage { ...messages.appearance } />
            </ListSubheader> }
          >
            <ListItem
              classes={ {
                secondaryAction: classes.ListItemSecondaryActionIsSwitch,
              } }
            >
              <ListItemText primary={ <FormattedMessage { ...messages.darkTheme } /> } />
              <ListItemSecondaryAction>
                <Switch checked={ dark ?? defaultDark } onChange={ handleDarkThemeChange } />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              classes={ {
                secondaryAction: classes.ListItemSecondaryActionIsSwitch,
              } }
            >
              <ListItemText primary={ <FormattedMessage { ...messages.fullScreen } /> } />
              <ListItemSecondaryAction>
                <Switch checked={ fullScreen } onChange={ handleFullScreenChange } />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <List
            subheader={ <ListSubheader>
              <FormattedMessage { ...messages.securityAndPrivacy } />
            </ListSubheader> }
          >
            <ListItem
              classes={ {
                secondaryAction: classes.ListItemSecondaryActionIsSwitch,
              } }
            >
              <ListItemText
                primary={ <FormattedMessage { ...messages.acceptCookies } /> }
                secondary={ <FormattedMessage { ...obtainedCookieConsentBannerMessages.weUseCookiesToAnalyzeOurTraffic } /> }
              />
              <ListItemSecondaryAction>
                <Switch checked={ cookieConsentObtained } onChange={ handleAcceptCookiesChange } disabled={ gtmContainerId === undefined } />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default createPage(SettingsPage)
