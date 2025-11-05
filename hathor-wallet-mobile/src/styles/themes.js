/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DefaultTheme } from '@react-navigation/native';
import { _PRIMARY_COLOR as PRIMARY_COLOR } from '../config';
import { HslColor } from '../HslColor';

/**
 * Dark theme color scheme - Matching web-wallet design
 * Design tokens from web-wallet Tailwind config
 */
export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  /**
   * @type {string} The main background color - Dark theme
   */
  backgroundColor: '#0D1117',
  /**
   * @type {string} Low contrast with background, like separator lines
   */
  lowContrastDetail: '#21262D',
  /**
   * @type {string} Medium contrast with background, like placeholders
   */
  midContrastDetail: '#57606A',
  darkContrastDetail: '#E8EAED',
  /**
   * @type {string} Defines borders
   */
  borderColor: '#24292F',
  borderColorMid: '#21262D',
  borderColorDark: '#191C21',
  /**
   * @type {string}
   * Maximum contrast with the background color, for better reading
   */
  textColor: '#FFFFFF',
  /**
   * @type {string} Washed down version of the text
   */
  textColorShadow: 'rgba(255, 255, 255, 0.5)',
  textColorShadowOpacity005: 'rgba(255, 255, 255, 0.05)',
  textColorShadowLighter: 'rgba(255, 255, 255, 0.1)',
  /**
   * @type {string} More washed down version of the text
   */
  textColorShadowLight: 'rgba(255, 255, 255, 0.3)',
  textColorShadowOpacity06: 'rgba(255, 255, 255, 0.6)',
  textColorShadowOpacity07: 'rgba(255, 255, 255, 0.7)',
  textColorShadowDark: 'rgba(255, 255, 255, 0.8)',
  textColorShadowOpacity09: 'rgba(255, 255, 255, 0.9)',
  /**
   * @type {string} Specific for tab bar selectors
   */
  tabBarBackground: '#24292F',
  /**
   * @type {string} Card background color
   */
  card: '#24292F',
  cardForeground: '#FFFFFF',
  /**
   * @type {string} Secondary background (darker than main)
   */
  secondary: '#191C21',
  secondaryForeground: '#FFFFFF',
  /**
   * @type {string} Muted text and elements
   */
  muted: '#57606A',
  mutedForeground: '#E8EAED',
  /**
   * @type {string} Accent color from web-wallet
   */
  accent: '#71A3DA',
  accentForeground: '#FFFFFF',
  /**
   * @type {string} Neutral colors
   */
  neutral100: '#FFFFFF',
  neutral500: '#57606A',
  neutral700: '#21262D',
  /**
   * @type {string} Represents a positive feedback for the user
   */
  positiveBalanceColor: '#71A3DA',
  /**
   * @type {string} For containers with error feedbacks
   */
  errorBgColor: '#DE3535',
  /**
   * @type {string} For texts with error messages
   */
  errorTextColor: '#FF6B6B',
  /**
   * @type {string} Washed down version of error texts
   * */
  errorTextShadow: `rgba(255, 107, 107, 0.7)`,
  /**
   * @type {string} Primary color, as set on the application config file
   * Matching web-wallet purple
   * */
  primary: PRIMARY_COLOR,
  primary400: '#BA90FF',
  primary500: PRIMARY_COLOR,
  primary600: '#542A99',
  primaryForeground: '#FFFFFF',
  /**
   * @type {string} Primary color washed down to 10% opacity
   */
  primaryOpacity10: `${PRIMARY_COLOR}1A`,
  /**
   * @type {string} Primary color washed down to 30% opacity
   */
  primaryOpacity30: `${PRIMARY_COLOR}4D`,
  feedbackSuccess100: 'hsla(161, 30%, 25%, 1)',
  feedbackSuccess400: 'hsla(159, 75%, 47%, 1)',
  feedbackWarning100: 'hsla(21, 100%, 20%, 1)',
  feedbackWarning300: 'hsla(21, 54%, 59%, 1)',
  feedbackError200: 'hsla(7, 69%, 25%, 1)',
  feedbackError600: 'hsla(7, 100%, 60%, 1)',
  freeze100: 'hsla(0, 0%, 30%, 1)',
  freeze300: 'hsla(0, 0%, 65%, 1)',
  cardWarning100: 'hsla(46, 100%, 25%, 1)',
  cardWarning200: 'hsla(46, 100%, 68%, 1)',
  /**
   * @type {string} Light gray for labels in dark theme
   */
  textLabel: 'hsla(0, 0%, 72%, 1)',
};

/**
 * @type {{ headerHeight: number }}
 * @property {number} headerHeight Defines the height of the screen title, for calculation purposes
 */
export const STYLE = {
  headerHeight: 56,
};

/**
 * Defines the default colors for the application.
 * Can be updated and will reflect the changes in real time on the application.
 * @see https://reactnavigation.org/docs/themes/
 * @type {{
 * dark: boolean,
 * colors: {
 *  border: string,
 *  notification: string,
 *  background: string,
 *  text: string,
 *  card: string,
 *  primary: string}
 * }}
 */
export const HathorTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.backgroundColor,
    text: COLORS.textColor,
    border: COLORS.borderColor,
    card: COLORS.card,
    primary: COLORS.primary,
    notification: COLORS.primary,
  },
};

const alertBaseColor = new HslColor('hsl(47, 100%, 66%)');
export const AlertUI = {
  baseHslColor: alertBaseColor,
  lightColor: alertBaseColor.addLightness(20).toString(),
  darkColor: alertBaseColor.addLightness(-44).toString(),
};
