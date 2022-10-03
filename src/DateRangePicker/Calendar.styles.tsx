import { renderIf } from 'react-renderif-hoc'
import styled from '@emotion/styled'
import { lighten, darken } from '../utils/cssUtils'
import AngleLeftIcon from './assets/AngleLeftIcon'
import AngleRightIcon from './assets/AngleRightIcon'
import CloseIcon from './assets/CloseIcon'
import {
  ACCENT_DARK,
  ACCENT_EXTRA_LIGHT,
  ACCENT_EXTREMELY_LIGHT,
  ACCENT_MEDIUM,
  NEUTRAL_DARK,
  NEUTRAL_EXTRA_DARK,
  NEUTRAL_EXTREMELY_DARK,
  NEUTRAL_EXTREMELY_DARK_2,
  NEUTRAL_LIGHT_2,
  NEUTRAL_MEDIUM,
} from './colors'
import { MAXW_SM_SCREEN, MINW_SM_SCREEN, Z_INDEX_CALENDAR_CONTAINER } from './constants'
import { boolean } from '@storybook/addon-knobs'

const daySize = 28
const singleMonthDaySize = 32
const datePickerMaxWidth = 420
const singleMonthMaxWidth = 220

export const CalendarContainer = styled.div<{ isSingleMonthPicker?: boolean }>`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  & * {
    box-sizing: border-box;
  }

  ${MAXW_SM_SCREEN} {
    position: fixed;
    top: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
    left: 0 !important;
    overflow: auto;
  }

  & .rdr-CustomComponent-container {
    max-width: ${({ isSingleMonthPicker }) => (isSingleMonthPicker ? singleMonthMaxWidth : datePickerMaxWidth)}px;
  }

  & .rdr-DateRange {
    padding: 16px;
    background: white;
    border: 1px solid ${NEUTRAL_MEDIUM};
    border-radius: 2px;
    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;

    & > div {
      display: inline-flex;

      ${MAXW_SM_SCREEN} {
        display: inline-flex;
        flex-direction: column;
        min-height: 100%;
        justify-content: center;
      }

      & * {
        transition: all 0ms;
      }
    }
  }

  & .rdr-DateRange-container {
    position: relative;
  }

  & .rdr-MonthAndYear-innerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;

    ${MAXW_SM_SCREEN} {
      margin: 0 8px 20px;
    }
  }

  & .rdr-MonthAndYear-innerWrapper.single {
    justify-content: flex-start;
  }

  & .rdr-Calendar:last-child {
    margin-left: 30px;

    ${MAXW_SM_SCREEN} {
      margin-left: 0;
    }
  }

  & .rdr-WeekDays {
    margin-bottom: 10px;
  }

  & .rdr-WeekDay {
    display: inline-block;
    width: ${({ isSingleMonthPicker }) => (isSingleMonthPicker ? singleMonthDaySize : daySize)}px;
    text-align: center;
    text-transform: capitalize;
    font-size: 10px;
    font-weight: 500;
    color: ${NEUTRAL_EXTRA_DARK};

    ${MAXW_SM_SCREEN} {
      font-size: 3vw;
      width: calc(100% / 7);
    }
  }

  & .rdr-MonthAndYear-month {
    margin: 0 2.5px;
  }

  & .rdr-MonthAndYear-year {
    margin: 0 2.5px;
  }

  & .rdr-MonthAndYear-container {
    width: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .rdr-MonthAndYear-button {
    background: none;
    border: none;
    border-radius: 99px;
    outline: none;
    cursor: pointer !important;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: all 0ms;
    width: 28px;

    & * {
      cursor: pointer !important;
    }

    svg {
      color: ${NEUTRAL_EXTRA_DARK};
      width: 22px;
      height: 22px;
    }

    &:hover {
      ${MINW_SM_SCREEN} {
        svg {
          color: ${NEUTRAL_EXTREMELY_DARK_2};
        }
      }
    }
  }

  & .rdr-MonthAndYear-innerWrapper.single {
    button {
      width: 22px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  & .rdr-MonthAndYear-button.next-single {
    padding-right: 0;
  }

  ${MINW_SM_SCREEN} {
    & .rdr-Calendar:first-child .rdr-MonthAndYear-button.next {
      visibility: hidden;
    }
    & .rdr-Calendar:last-child .rdr-MonthAndYear-button.next {
      padding-right: 0;
    }
    & .rdr-Calendar:first-child .rdr-MonthAndYear-button.prev {
      padding-left: 0;
    }
    & .rdr-Calendar:last-child .rdr-MonthAndYear-button.prev {
      visibility: hidden;
    }
    & .rdr-Calendar:first-child .rdr-MonthAndYear-button.next-single {
      visibility: visible;
    }
  }

  & .rdr-Days {
    display: flex;
    flex-wrap: wrap;
    width: ${({ isSingleMonthPicker }) => (isSingleMonthPicker ? singleMonthDaySize : daySize) * 7}px;

    ${MAXW_SM_SCREEN} {
      width: 100%;
    }
  }

  & .rdr-DayWrapper {
    position: relative;
    margin-bottom: 2px;

    ${MAXW_SM_SCREEN} {
      margin-bottom: 4px;
    }

    &.is-fromPreviousMonth {
      visibility: hidden;
    }

    &.is-selected:not(.is-passive) {
      &::before {
        content: '';
        display: block;
        position: absolute;
        background: ${ACCENT_MEDIUM};
        top: 0;
        bottom: 0;
        width: 50%;
      }

      &.is-endEdge::before {
        left: 0;
      }

      &.is-startEdge::before {
        right: 0;
      }

      &.is-startEdge.is-endEdge::before {
        display: none;
      }
    }
  }

  & .rdr-Day,
  & .rdr-DayWrapper,
  & .rdr-DayWrapper::before {
    transition: all 0ms;
  }

  & .rdr-Day {
    display: flex;
    cursor: pointer;
    width: ${({ isSingleMonthPicker }) => (isSingleMonthPicker ? singleMonthDaySize : daySize)}px;
    height: ${({ isSingleMonthPicker }) => (isSingleMonthPicker ? singleMonthDaySize : daySize)}px;
    line-height: ${({ isSingleMonthPicker }) => (isSingleMonthPicker ? singleMonthDaySize : daySize)}px;
    font-size: 12px;
    border: 2px solid transparent;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    font-weight: 400;
    z-index: 1;
    position: relative;
    color: ${NEUTRAL_EXTREMELY_DARK};

    ${MAXW_SM_SCREEN} {
      width: calc((100vw - 34px) / 7);
      height: calc((50vh - 40px) / 7);
      font-size: 4vw;
    }

    &:hover {
      background: ${ACCENT_EXTREMELY_LIGHT};
      color: ${ACCENT_MEDIUM};
    }

    &.is-passive {
      cursor: not-allowed;
      text-decoration: line-through;
      color: ${NEUTRAL_DARK};

      &:hover {
        color: ${NEUTRAL_DARK};
        background: ${NEUTRAL_LIGHT_2};
      }
    }

    &.is-original-range {
      background: ${ACCENT_EXTREMELY_LIGHT};
      color: ${ACCENT_MEDIUM};
    }

    &.is-inRange {
      background: ${ACCENT_EXTREMELY_LIGHT};
      border-radius: 0;
      color: ${ACCENT_MEDIUM};

      &:hover {
        background: ${ACCENT_EXTRA_LIGHT};
      }

      &.has-original-range {
        background: ${ACCENT_EXTRA_LIGHT};
        color: ${ACCENT_MEDIUM};

        &:hover:not(.is-selected) {
          background: ${ACCENT_EXTREMELY_LIGHT};
        }
      }
    }

    &.is-selected {
      background: ${ACCENT_MEDIUM};
      color: white;
      border-radius: 2px;

      &.has-original-range {
        background: ${ACCENT_MEDIUM};
        color: white;
        border-radius: 2px;
      }

      &:hover {
        background: ${ACCENT_DARK};
        color: white;
      }
    }
  }

  & .rdr-DayWrapper.is-inRange {
    &:nth-child(7n),
    &:last-child {
      & .rdr-Day,
      &.is-startEdge::before {
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
      }
    }

    &:nth-child(7n-6),
    &:first-child {
      & .rdr-Day {
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
      }
    }
  }

  .rdr-DayWrapper.is-selected.is-endEdge:nth-child(7n-6)::before {
    display: none;
  }

  & .rdr-DayWrapper.is-passive + .rdr-DayWrapper.is-selected.is-endEdge::before {
    display: none;
  }

  & .rdr-DayWrapper.is-passive + .rdr-DayWrapper.is-inRange:not(.is-selected) {
    & .rdr-Day,
    &.is-startEdge::before {
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
    }
  }
`

export const ClearButtonContainer = styled('div')<{ singleMonthPicker?: boolean }>`
  justify-content: center;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  ${MINW_SM_SCREEN} {
    position: absolute;
    width: 80px;
    left: calc(50% - 40px);
    top: 0;
  }

  ${props =>
    props.singleMonthPicker &&
    `
    ${MINW_SM_SCREEN} {
      width: 45px;
      left: auto;
      right: 0;
      top: -2px;
    } 
  `}

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    border-top: 1px solid #ddd;
    z-index: ${Z_INDEX_CALENDAR_CONTAINER + 1};

    ${MINW_SM_SCREEN} {
      display: none;
    }
  }
`

interface ClearButtonProps {
  show: boolean
  color: string
}

export const ClearButton = styled.button<ClearButtonProps>`
  width: 80px;
  border: none;
  background: white;
  height: 24px;
  line-height: 19px;
  font-weight: 500;
  color: ${({ color }) => color};
  font-size: 13px;
  display: ${p => (p.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  position: relative;
  z-index: ${Z_INDEX_CALENDAR_CONTAINER + 2};

  &:hover {
    color: ${({ color }) => darken(color, 15)};
  }
`

interface CloseButtonProps {
  show: boolean
  color: string
}

export const CloseButton = styled.button<CloseButtonProps>`
  display: none;
  position: absolute;
  border: none;
  right: 0;
  z-index: ${Z_INDEX_CALENDAR_CONTAINER + 1};
  background: ${({ color }) => color};
  border-radius: 99px;
  height: 24px;
  width: 40px;
  align-items: center;
  justify-content: center;
  top: calc(50% - 12px);
  outline: none;

  ${MAXW_SM_SCREEN} {
    display: flex;
  }

  &:active {
    background: ${({ color }) => lighten(color, 10)};
  }
`

export const IconClose = styled(CloseIcon)`
  width: 20px;
  height: 20px;

  & path {
    fill: white;
  }
`

export const IconAngleRight = styled(AngleRightIcon)``

export const IconAngleLeft = styled(AngleLeftIcon)``

export const ApplyButton = renderIf('show')(styled.button`
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  color: #ffffff;
  background-color: #0091e3;
  border: none;
  border-radius: 3px;
  outline: none;
  margin: 15px 0 0 auto;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: rgba(0, 145, 227, 0.67);
  }

  &:active {
    background-color: rgb(0, 100, 177);
  }
`)

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${NEUTRAL_MEDIUM};
  margin-top: 20px;
  margin-bottom: 14px;
`

export const FooterText = styled.span`
  font-size: 13px;
  color: ${NEUTRAL_EXTREMELY_DARK};
`

export const FooterTextLinedThrough = styled.span`
  font-size: 13px;
  color: ${NEUTRAL_EXTREMELY_DARK};
  text-decoration: line-through;
`
