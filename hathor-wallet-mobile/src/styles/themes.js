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
 * FUTURISTIC GRADIENT THEME 🚀
 * Bold, Vibrant, Absolutely Gorgeous
 * Inspired by: Phantom Wallet, Stripe, Linear, Vercel
 */
export const COLORS = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',

  // === BACKGROUNDS ===
  // Deep space gradient
  backgroundColor: '#0B0D17', // Deep midnight blue
  backgroundGradientStart: '#0B0D17',
  backgroundGradientMiddle: '#1A1625', // Deep purple tint
  backgroundGradientEnd: '#0F1419',

  // === CARDS & SURFACES ===
  // Floating glass cards
  card: '#1C1F2E',
  cardGlass: 'rgba(28, 31, 46, 0.5)',
  cardElevated: '#252A3E',
  cardHover: '#2D334A',

  // === PRIMARY GRADIENT (Neon Purple to Pink) ===
  primary: '#A855F7', // Bright purple
  primaryLight: '#C084FC', // Lighter purple
  primaryDark: '#9333EA',
  primaryPink: '#EC4899', // Hot pink for gradient
  primaryCyan: '#06B6D4', // Cyan accent
  primary400: '#C084FC',
  primary500: '#A855F7',
  primary600: '#9333EA',
  primaryForeground: '#FFFFFF',
  primaryGlow: 'rgba(168, 85, 247, 0.5)',
  primaryOpacity10: 'rgba(168, 85, 247, 0.1)',
  primaryOpacity20: 'rgba(168, 85, 247, 0.2)',
  primaryOpacity30: 'rgba(168, 85, 247, 0.3)',

  // === ACCENT GRADIENT (Cyan to Blue) ===
  accent: '#06B6D4', // Bright cyan
  accentLight: '#22D3EE',
  accentDark: '#0891B2',
  accentBlue: '#3B82F6', // Royal blue
  accentForeground: '#FFFFFF',
  accentGlow: 'rgba(6, 182, 212, 0.5)',

  // === NEON COLORS ===
  neonPurple: '#A855F7',
  neonPink: '#EC4899',
  neonCyan: '#06B6D4',
  neonGreen: '#10B981',
  neonOrange: '#F59E0B',
  neonRed: '#EF4444',

  // === TEXT COLORS ===
  textColor: '#FFFFFF',
  textSecondary: '#A1A1AA', // Neutral gray
  textMuted: '#71717A', // Darker gray
  textLabel: '#A1A1AA',
  textGlow: 'rgba(255, 255, 255, 0.9)',

  // Better text shadows
  textColorShadow: 'rgba(255, 255, 255, 0.7)',
  textColorShadowOpacity005: 'rgba(255, 255, 255, 0.05)',
  textColorShadowLighter: 'rgba(255, 255, 255, 0.2)',
  textColorShadowLight: 'rgba(255, 255, 255, 0.5)',
  textColorShadowOpacity06: 'rgba(255, 255, 255, 0.7)',
  textColorShadowOpacity07: 'rgba(255, 255, 255, 0.8)',
  textColorShadowDark: 'rgba(255, 255, 255, 0.9)',
  textColorShadowOpacity09: 'rgba(255, 255, 255, 0.95)',

  // === BORDERS ===
  borderColor: 'rgba(168, 85, 247, 0.15)', // Subtle purple
  borderColorMid: 'rgba(168, 85, 247, 0.1)',
  borderColorDark: 'rgba(255, 255, 255, 0.05)',
  borderGlow: 'rgba(168, 85, 247, 0.4)', // Purple glow
  borderNeon: 'rgba(168, 85, 247, 0.6)', // Bright purple

  // === SUCCESS (Neon Emerald) ===
  success: '#10B981',
  successLight: '#34D399',
  successDark: '#059669',
  successBg: 'rgba(16, 185, 129, 0.12)',
  successGlow: 'rgba(16, 185, 129, 0.4)',
  feedbackSuccess100: 'rgba(16, 185, 129, 0.12)',
  feedbackSuccess400: '#10B981',

  // === WARNING (Neon Amber) ===
  warning: '#F59E0B',
  warningLight: '#FCD34D',
  warningDark: '#D97706',
  warningBg: 'rgba(245, 158, 11, 0.12)',
  warningGlow: 'rgba(245, 158, 11, 0.4)',
  feedbackWarning100: 'rgba(245, 158, 11, 0.12)',
  feedbackWarning300: '#F59E0B',

  // === ERROR (Neon Red) ===
  error: '#EF4444',
  errorLight: '#F87171',
  errorDark: '#DC2626',
  errorBg: 'rgba(239, 68, 68, 0.12)',
  errorGlow: 'rgba(239, 68, 68, 0.4)',
  errorBgColor: '#EF4444',
  errorTextColor: '#FCA5A5',
  errorTextShadow: 'rgba(252, 165, 165, 0.7)',
  feedbackError200: 'rgba(239, 68, 68, 0.12)',
  feedbackError600: '#EF4444',

  // === BALANCE/POSITIVE (Neon Cyan) ===
  positiveBalanceColor: '#06B6D4',

  // === FREEZE/INACTIVE ===
  freeze100: 'rgba(113, 113, 122, 0.15)',
  freeze300: '#71717A',

  // === CARD WARNINGS ===
  cardWarning100: 'rgba(245, 158, 11, 0.12)',
  cardWarning200: '#FBBF24',

  // === COMPONENT SPECIFIC ===
  tabBarBackground: '#1C1F2E',
  cardForeground: '#FFFFFF',
  secondary: '#252A3E',
  secondaryForeground: '#FFFFFF',

  // Muted variations
  muted: '#71717A',
  mutedForeground: '#D4D4D8',
  lowContrastDetail: '#252A3E',
  midContrastDetail: '#71717A',
  darkContrastDetail: '#D4D4D8',

  // Neutral scale (Zinc)
  neutral100: '#FFFFFF',
  neutral200: '#E4E4E7',
  neutral300: '#D4D4D8',
  neutral400: '#A1A1AA',
  neutral500: '#71717A',
  neutral600: '#52525B',
  neutral700: '#3F3F46',
  neutral800: '#27272A',
  neutral900: '#18181B',

  // === GRADIENTS ===
  // Primary gradient (Purple to Pink)
  gradientPurplePink: ['#A855F7', '#EC4899'],
  gradientPurplePinkPositions: [0, 1],

  // Accent gradient (Cyan to Blue)
  gradientCyanBlue: ['#06B6D4', '#3B82F6'],

  // Success gradient
  gradientGreen: ['#10B981', '#34D399'],

  // Error gradient
  gradientRed: ['#EF4444', '#F87171'],

  // Warning gradient
  gradientOrange: ['#F59E0B', '#FCD34D'],

  // Background gradient (for screens)
  gradientBackground: ['#0B0D17', '#1A1625', '#0F1419'],
  gradientBackgroundPositions: [0, 0.5, 1],

  // === SHADOWS ===
  shadowPrimary: 'rgba(168, 85, 247, 0.4)',
  shadowPrimaryStrong: 'rgba(168, 85, 247, 0.6)',
  shadowAccent: 'rgba(6, 182, 212, 0.4)',
  shadowDark: 'rgba(0, 0, 0, 0.6)',
  shadowDarkStrong: 'rgba(0, 0, 0, 0.8)',
  shadowGlow: 'rgba(168, 85, 247, 0.3)',
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
