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
 * BEAUTIFUL MODERN LIGHT THEME 🌈✨
 * Clean, Vibrant, Absolutely Stunning
 * Inspired by: Stripe, Revolut, N26, Cash App
 */
export const COLORS = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',

  // === BACKGROUNDS ===
  // Clean, bright, airy
  backgroundColor: '#F8F9FC', // Soft blue-gray background
  backgroundGradientStart: '#FFFFFF',
  backgroundGradientMiddle: '#F8F9FC',
  backgroundGradientEnd: '#F0F2F8',

  // === CARDS & SURFACES ===
  // Pure white floating cards
  card: '#FFFFFF',
  cardGlass: 'rgba(255, 255, 255, 0.95)',
  cardElevated: '#FFFFFF',
  cardHover: '#FAFBFC',

  // === PRIMARY GRADIENT (Beautiful Purple to Pink) ===
  primary: '#8B5CF6', // Rich vibrant purple
  primaryLight: '#A78BFA', // Soft lavender
  primaryDark: '#7C3AED',
  primaryPink: '#EC4899', // Hot pink
  primaryCyan: '#06B6D4', // Bright cyan
  primary400: '#A78BFA',
  primary500: '#8B5CF6',
  primary600: '#7C3AED',
  primaryForeground: '#FFFFFF',
  primaryGlow: 'rgba(139, 92, 246, 0.25)',
  primaryOpacity10: 'rgba(139, 92, 246, 0.08)',
  primaryOpacity20: 'rgba(139, 92, 246, 0.12)',
  primaryOpacity30: 'rgba(139, 92, 246, 0.18)',

  // === ACCENT GRADIENT (Cyan to Blue) ===
  accent: '#06B6D4', // Vibrant cyan
  accentLight: '#22D3EE',
  accentDark: '#0891B2',
  accentBlue: '#3B82F6', // Beautiful blue
  accentForeground: '#FFFFFF',
  accentGlow: 'rgba(6, 182, 212, 0.25)',

  // === VIBRANT COLORS ===
  neonPurple: '#8B5CF6',
  neonPink: '#EC4899',
  neonCyan: '#06B6D4',
  neonGreen: '#10B981',
  neonOrange: '#F59E0B',
  neonRed: '#EF4444',

  // === TEXT COLORS ===
  textColor: '#1E293B', // Rich dark slate
  textSecondary: '#64748B', // Medium slate
  textMuted: '#94A3B8', // Light slate
  textLabel: '#64748B',
  textGlow: 'rgba(30, 41, 59, 0.95)',

  // Text shadow variations
  textColorShadow: 'rgba(30, 41, 59, 0.8)',
  textColorShadowOpacity005: 'rgba(30, 41, 59, 0.05)',
  textColorShadowLighter: 'rgba(30, 41, 59, 0.3)',
  textColorShadowLight: 'rgba(30, 41, 59, 0.5)',
  textColorShadowOpacity06: 'rgba(30, 41, 59, 0.7)',
  textColorShadowOpacity07: 'rgba(30, 41, 59, 0.8)',
  textColorShadowDark: 'rgba(30, 41, 59, 0.9)',
  textColorShadowOpacity09: 'rgba(30, 41, 59, 0.95)',

  // === BORDERS ===
  borderColor: 'rgba(226, 232, 240, 1)', // Clean light border
  borderColorMid: 'rgba(241, 245, 249, 1)',
  borderColorDark: 'rgba(203, 213, 225, 1)',
  borderGlow: 'rgba(139, 92, 246, 0.2)', // Subtle purple tint
  borderNeon: 'rgba(139, 92, 246, 0.35)', // Vibrant purple border

  // === SUCCESS (Fresh Green) ===
  success: '#10B981',
  successLight: '#34D399',
  successDark: '#059669',
  successBg: 'rgba(16, 185, 129, 0.1)',
  successGlow: 'rgba(16, 185, 129, 0.25)',
  feedbackSuccess100: 'rgba(16, 185, 129, 0.1)',
  feedbackSuccess400: '#10B981',

  // === WARNING (Warm Orange) ===
  warning: '#F59E0B',
  warningLight: '#FCD34D',
  warningDark: '#D97706',
  warningBg: 'rgba(245, 158, 11, 0.1)',
  warningGlow: 'rgba(245, 158, 11, 0.25)',
  feedbackWarning100: 'rgba(245, 158, 11, 0.1)',
  feedbackWarning300: '#F59E0B',

  // === ERROR (Vibrant Red) ===
  error: '#EF4444',
  errorLight: '#F87171',
  errorDark: '#DC2626',
  errorBg: 'rgba(239, 68, 68, 0.1)',
  errorGlow: 'rgba(239, 68, 68, 0.25)',
  errorBgColor: '#FEE2E2',
  errorTextColor: '#DC2626',
  errorTextShadow: 'rgba(220, 38, 38, 0.7)',
  feedbackError200: 'rgba(239, 68, 68, 0.1)',
  feedbackError600: '#EF4444',

  // === BALANCE/POSITIVE (Vibrant Cyan) ===
  positiveBalanceColor: '#06B6D4',

  // === FREEZE/INACTIVE ===
  freeze100: 'rgba(148, 163, 184, 0.15)',
  freeze300: '#94A3B8',

  // === CARD WARNINGS ===
  cardWarning100: 'rgba(245, 158, 11, 0.1)',
  cardWarning200: '#FBBF24',

  // === COMPONENT SPECIFIC ===
  tabBarBackground: '#FFFFFF',
  cardForeground: '#1E293B',
  secondary: '#F1F5F9',
  secondaryForeground: '#1E293B',

  // Muted variations
  muted: '#94A3B8',
  mutedForeground: '#475569',
  lowContrastDetail: '#F8FAFC',
  midContrastDetail: '#E2E8F0',
  darkContrastDetail: '#CBD5E1',

  // Neutral scale (Slate - beautiful grays)
  neutral100: '#F8FAFC',
  neutral200: '#F1F5F9',
  neutral300: '#E2E8F0',
  neutral400: '#CBD5E1',
  neutral500: '#94A3B8',
  neutral600: '#64748B',
  neutral700: '#475569',
  neutral800: '#334155',
  neutral900: '#1E293B',

  // === GRADIENTS ===
  // Primary gradient (Purple to Pink)
  gradientPurplePink: ['#8B5CF6', '#EC4899'],
  gradientPurplePinkPositions: [0, 1],

  // Accent gradient (Cyan to Blue)
  gradientCyanBlue: ['#06B6D4', '#3B82F6'],

  // Success gradient
  gradientGreen: ['#10B981', '#34D399'],

  // Error gradient
  gradientRed: ['#EF4444', '#F87171'],

  // Warning gradient
  gradientOrange: ['#F59E0B', '#FCD34D'],

  // Background gradient (soft and clean)
  gradientBackground: ['#FFFFFF', '#F8F9FC', '#F0F2F8'],
  gradientBackgroundPositions: [0, 0.5, 1],

  // === SHADOWS ===
  shadowPrimary: 'rgba(139, 92, 246, 0.15)',
  shadowPrimaryStrong: 'rgba(139, 92, 246, 0.25)',
  shadowAccent: 'rgba(6, 182, 212, 0.15)',
  shadowDark: 'rgba(15, 23, 42, 0.08)',
  shadowDarkStrong: 'rgba(15, 23, 42, 0.12)',
  shadowGlow: 'rgba(139, 92, 246, 0.2)',
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
  dark: false,
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
