/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../../theme'

export const StyledStatsItemContainer = styled<{}, 'ul'>('ul')`
  display: block;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  & > li {
    display: inline-block;
    margin-right: 50px;
  }

  @media screen and (max-width: 904px) {
    & > li {
      margin: 20px;
    }
  }
`

export const StyledStatsItem = styled<{}, 'li'>('li')`
  vertical-align: middle;
  list-style-type: none;
  font-size: inherit;
  font-family: inherit;

  &:first-child {
    color: #FB542B;
  }
  &:nth-child(2) {
    color: #B02FFB;
  }
  &:last-child {
    color: #4C54D2;
  }
`

export const StyledStatsItemCounter = styled<{}, 'span'>('span')`
  color: inherit;
  font-family: ${p => p.theme.fontFamily.heading};
  font-size: 54px;
  font-weight: 400;
  width: 7ch;
  letter-spacing: -0.4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const StyledStatsItemText = styled<{}, 'span'>('span')`
  font-size: 20px;
  font-family: ${p => p.theme.fontFamily.heading};
  margin-left: 5px;
  display: inline;
  letter-spacing: 0;
`

export const StyledStatsItemDescription = styled<{}, 'div'>('div')`
  font-size: 14px;
  letter-spacing: .05em;
  font-weight: 300;
  color: rgb(255, 255, 255);
  font-family: ${p => p.theme.fontFamily.heading};
`
