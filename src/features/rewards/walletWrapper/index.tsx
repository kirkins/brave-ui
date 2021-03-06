/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledHeader,
  StyledTitle,
  StyledBalance,
  StyledBalanceTokens,
  StyledContent,
  StyledAction,
  StyledActionIcon,
  StyledCopy,
  StyledCopyImage,
  StyledIconAction,
  StyledBalanceConverted,
  StyledGrantWrapper,
  StyledGrant,
  StyledActionWrapper,
  StyledBalanceCurrency,
  StyledCurve,
  StyledAlertWrapper,
  StyledAlertClose,
  StyleGrantButton,
  StyledActionText,
  StyledBAT,
  StyledNotificationIcon,
  StyledNotificationCloseIcon,
  StyledTypeText,
  StyledMessageText,
  StyledDateText,
  StyledNotificationContent,
  StyledButton,
  StyledNotificationMessage,
  StyledPipe
} from './style'
import { getLocale } from '../../../helpers'
import Alert, { Type as AlertType } from '../alert'
import { Button } from '../../../components'
import {
  CaratDownIcon,
  CaratUpIcon,
  CloseStrokeIcon,
  SettingsAdvancedIcon,
  UpholdColorIcon,
  UpholdSystemIcon
} from '../../../components/icons'

import giftIconUrl from './assets/gift.svg'
import loveIconUrl from './assets/love.svg'
import megaphoneIconUrl from './assets/megaphone.svg'

type Grant = {
  tokens: string,
  expireDate: string
}

export interface AlertWallet {
  node: React.ReactNode
  type: AlertType
  onAlertClose?: () => void
}

export interface ActionWallet {
  icon: React.ReactNode
  name: string
  action: () => void
}

export type NotificationType = 'ads' | 'contribute' | 'grant' | 'insufficientFunds' | 'error' | ''

export interface Notification {
  id: string
  date: string
  type: NotificationType
  text: React.ReactNode
  onCloseNotification: (id: string) => void
}

export interface Props {
  balance: string
  converted: string | null
  actions: ActionWallet[]
  connectedWallet?: boolean
  compact?: boolean
  contentPadding?: boolean
  showCopy?: boolean
  children?: React.ReactNode
  showSecActions?: boolean
  onSettingsClick?: () => void
  onActivityClick?: () => void
  grants?: Grant[]
  alert?: AlertWallet | null
  id?: string
  gradientTop?: string
  isMobile?: boolean
  notification?: Notification
}

interface State {
  grantDetails: boolean
}

export default class WalletWrapper extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      grantDetails: false
    }
  }

  generateActions (actions: {icon: React.ReactNode, name: string, action: () => void}[], id?: string) {
    return actions && actions.map((action, i: number) => {
      return (
        <StyledAction key={`${id}-${i}`} onClick={action.action}>
          <StyledActionIcon>{action.icon}</StyledActionIcon>
          <StyledActionText>{action.name}</StyledActionText>
        </StyledAction>
      )
    })
  }

  generateNotification = (notification: Notification | undefined) => {
    if (!notification) {
      return null
    }

    const onClose = notification.onCloseNotification.bind(this, notification.id)

    return (
      <>
        <StyledNotificationCloseIcon>
          <CloseStrokeIcon onClick={onClose} />
        </StyledNotificationCloseIcon>
        <StyledNotificationContent>
          {this.getNotificationIcon(notification)}
          {this.getNotificationMessage(notification)}
          <StyledButton>
            <Button
              size={'small'}
              type={'accent'}
              level={'primary'}
              onClick={onClose}
              text={'OK'}
            />
          </StyledButton>
        </StyledNotificationContent>
      </>
    )
  }

  toggleGrantDetails = () => {
    this.setState({ grantDetails: !this.state.grantDetails })
  }

  hasGrants = (grants?: Grant[]) => {
    return grants && grants.length > 0
  }

  getNotificationIcon = (notification: Notification) => {
    let icon

    switch (notification.type) {
      case 'ads':
        icon = megaphoneIconUrl
        break
      case 'contribute':
        icon = loveIconUrl
        break
      case 'grant':
        icon = giftIconUrl
        break
      case 'insufficientFunds':
        icon = megaphoneIconUrl
        break
      default:
        icon = ''
        break
    }

    if (!icon) {
      return null
    }

    return (
      <StyledNotificationIcon src={icon} />
    )
  }

  getNotificationMessage = (notification: Notification) => {
    let typeText

    switch (notification.type) {
      case 'ads':
        typeText = getLocale('braveAdsTitle')
        break
      case 'contribute':
        typeText = getLocale('braveContributeTitle')
        break
      case 'grant':
        typeText = getLocale('tokenGrant')
        break
      case 'insufficientFunds':
        typeText = getLocale('insufficientFunds')
        break
      default:
        typeText = ''
        break
    }

    return (
      <StyledNotificationMessage>
        <StyledTypeText>{typeText}</StyledTypeText> <StyledPipe>|</StyledPipe>
        <StyledMessageText>{notification.text}</StyledMessageText>
        <StyledDateText>{notification.date}</StyledDateText>
      </StyledNotificationMessage>
    )
  }

  render () {
    const {
      id,
      children,
      balance,
      converted,
      actions,
      showCopy,
      connectedWallet,
      compact,
      contentPadding,
      showSecActions,
      grants,
      onSettingsClick,
      alert,
      gradientTop,
      notification,
      isMobile
    } = this.props

    const hasGrants = this.hasGrants(grants)

    return (
      <>
        <StyledWrapper
          id={id}
          compact={compact}
          isMobile={isMobile}
          notification={notification}
        >
          <StyledHeader>
            {
              !notification
              ? <>
                {
                  alert && alert.node
                  ? <StyledAlertWrapper>
                    {
                      alert.onAlertClose
                      ? <StyledAlertClose onClick={alert.onAlertClose}>
                        <CloseStrokeIcon />
                      </StyledAlertClose>
                      : null
                    }
                    <Alert type={alert.type} bg={true}>
                        {alert.node}
                    </Alert>
                  </StyledAlertWrapper>
                  : null
                }
                <StyledTitle>{getLocale('yourWallet')}</StyledTitle>
                {
                  showSecActions
                  ? <StyledIconAction onClick={onSettingsClick} data-test-id='settingsButton'>
                    <SettingsAdvancedIcon />
                  </StyledIconAction>
                  : null
                }
                <StyledBalance>
                  <StyledBalanceTokens>
                    {balance} <StyledBalanceCurrency>BAT</StyledBalanceCurrency>
                  </StyledBalanceTokens>
                  {
                    converted
                    ? <StyledBalanceConverted>{converted}</StyledBalanceConverted>
                    : null
                  }
                  {
                    hasGrants
                    ? <StyleGrantButton>
                      <Button
                        text={getLocale('grants')}
                        size={'small'}
                        type={'subtle'}
                        level={'secondary'}
                        onClick={this.toggleGrantDetails}
                        icon={{ position: 'after', image: this.state.grantDetails ? <CaratUpIcon /> : <CaratDownIcon /> }}
                      />
                    </StyleGrantButton>
                    : null
                  }
                </StyledBalance>
                {
                  this.state.grantDetails && hasGrants
                  ? <StyledGrantWrapper>
                    {
                      grants && grants.map((grant: Grant, i: number) => {
                        return <StyledGrant key={`${id}-grant-${i}`}>
                          <b>{grant.tokens} BAT</b> <span>{getLocale('expiresOn')} {grant.expireDate}</span>
                        </StyledGrant>
                      })
                    }
                  </StyledGrantWrapper>
                  : null
                }
                <StyledActionWrapper>
                  {this.generateActions(actions, id)}
                </StyledActionWrapper>
              </>
              : this.generateNotification(notification)
            }
            <StyledCurve background={gradientTop}/>
          </StyledHeader>
          <StyledContent
            contentPadding={contentPadding}
          >
            {children}
          </StyledContent>
          {
            showCopy
            ? <StyledCopy connected={connectedWallet}>
                {
                  connectedWallet
                  ? <>
                    <StyledCopyImage>
                      <UpholdColorIcon />
                    </StyledCopyImage>
                    {getLocale('rewardsPanelText1')} <b>Uphold</b>.
                  </>
                  : <>
                    <StyledCopyImage>
                      <UpholdSystemIcon />
                    </StyledCopyImage>
                    {getLocale('rewardsPanelText2')} <b>Uphold</b>.
                  </>
                }
            </StyledCopy>
            : null
          }
        </StyledWrapper>
        {
          showCopy
          ? <StyledBAT>
            {getLocale('rewardsPanelText3')} <a href={'https://basicattentiontoken.org/'} target={'_blank'}>{getLocale('rewardsPanelText4')}</a>
          </StyledBAT>
          : null
        }
      </>
    )
  }
}
