/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledCard,
  StyledLeft,
  StyledRight,
  StyledDescription,
  StyledSettingsIcon,
  StyledContent,
  StyledTitle,
  StyledBreak,
  StyledSettingsWrapper,
  StyledSettingsClose,
  StyledSettingsTitle,
  StyledSettingsText,
  StyledContentWrapper,
  StyledFlip
} from './style'
import { Tooltip } from '../'
import Toggle from '../../../components/formControls/toggle/index'
import { getLocale } from '../../../helpers'
import { CloseStrokeIcon, SettingsIcon } from '../../../components/icons'

export type Type = 'ads' | 'contribute' | 'donation'

export interface Props {
  title: string
  id?: string
  description?: string
  toggle?: boolean
  checked?: boolean
  attachedAlert?: React.ReactNode
  onToggle?: () => void
  settingsChild?: React.ReactNode
  disabledContent?: React.ReactNode
  children?: React.ReactNode
  testId?: string
  type: Type
}

interface State {
  settingsOpened: boolean
}

/*
  TODO
  - add fade effect
 */
export default class Box extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      settingsOpened: false
    }
  }

  settingsClick = () => {
    this.setState({ settingsOpened: !this.state.settingsOpened })
  }

  getSettingsTitle = (title: string) => {
    return `${title} ${getLocale('settings')}`
  }

  render () {
    const {
      id,
      title,
      toggle,
      checked,
      attachedAlert,
      onToggle,
      settingsChild,
      disabledContent,
      description,
      type,
      children,
      testId
    } = this.props

    const isDisabled = (toggle && !checked) || (!toggle && disabledContent)

    return (
      <StyledWrapper>
        <StyledCard
          testId={id}
          hasAlert={!!attachedAlert}
        >
          <StyledFlip>
            <StyledContentWrapper open={!this.state.settingsOpened}>
              <StyledLeft>
                <StyledTitle type={type} checked={checked}>{title}</StyledTitle>
              </StyledLeft>
              <StyledRight>
                {
                  toggle ?
                  <Toggle onToggle={onToggle} checked={checked} testId={testId} />
                  : null
                }
              </StyledRight>
              <StyledBreak />
              <StyledLeft>
                <StyledDescription>
                {description}
                </StyledDescription>
              </StyledLeft>
              <StyledRight>
                {
                  settingsChild && ((toggle && checked) || !toggle) ?
                  <Tooltip
                    id={'brave-ads-tip'}
                    content={this.getSettingsTitle(title)}
                  >
                    <StyledSettingsIcon float={'right'} onClick={this.settingsClick}>
                      <SettingsIcon />
                    </StyledSettingsIcon>
                  </Tooltip>
                  : null
                }
              </StyledRight>
              <StyledContent>
                {
                  isDisabled
                  ? disabledContent
                  : children
                }
              </StyledContent>
            </StyledContentWrapper>
            <StyledSettingsWrapper open={this.state.settingsOpened}>
              <StyledSettingsClose onClick={this.settingsClick} open={this.state.settingsOpened}>
                <CloseStrokeIcon />
              </StyledSettingsClose>
              <StyledSettingsTitle>
                <StyledSettingsIcon>
                  <SettingsIcon />
                </StyledSettingsIcon>
                <StyledSettingsText>{this.getSettingsTitle(title)}</StyledSettingsText>
              </StyledSettingsTitle>
              {settingsChild}
            </StyledSettingsWrapper>
          </StyledFlip>
        </StyledCard>
        {attachedAlert}
      </StyledWrapper>
    )
  }
}
