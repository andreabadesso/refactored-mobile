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
 * Modern Premium Dark Theme - Completely Refactored
 * Inspired by modern fintech apps with glassmorphism and vibrant gradients
 */
export const COLORS = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',

  // === BACKGROUNDS ===
  // Deep gradient background for modern feel
  backgroundColor: '#0A0E1A',
  backgroundGradientStart: '#0A0E1A',
  backgroundGradientEnd: '#0F1419',

  // === CARDS & SURFACES ===
  // Glassmorphic elevated surfaces
  card: '#1A1F2E',
  cardGlass: 'rgba(26, 31, 46, 0.6)', // For glassmorphism effect
  cardElevated: '#1F2937',
  cardHover: '#252D3D',

  // === PRIMARY COLORS (Vibrant Purple) ===
  primary: '#8B5CF6', // Vibrant purple
  primaryLight: '#A855F7', // Lighter purple for gradients
  primaryDark: '#7C3AED',
  primary400: '#A78BFA',
  primary500: '#8B5CF6',
  primary600: '#7C3AED',
  primaryForeground: '#FFFFFF',
  primaryGlow: 'rgba(139, 92, 246, 0.4)', // Glow effect
  primaryOpacity10: 'rgba(139, 92, 246, 0.1)',
  primaryOpacity30: 'rgba(139, 92, 246, 0.3)',

  // === ACCENT COLORS ===
  accent: '#06B6D4', // Bright cyan
  accentLight: '#22D3EE',
  accentDark: '#0891B2',
  accentForeground: '#FFFFFF',
  accentGlow: 'rgba(6, 182, 212, 0.4)',

  // === TEXT COLORS ===
  textColor: '#FFFFFF',
  textSecondary: '#94A3B8', // Slate for secondary text
  textMuted: '#64748B', // Darker slate for muted text
  textLabel: '#94A3B8',

  // Text shadows with better opacity
  textColorShadow: 'rgba(255, 255, 255, 0.6)',
  textColorShadowOpacity005: 'rgba(255, 255, 255, 0.05)',
  textColorShadowLighter: 'rgba(255, 255, 255, 0.15)',
  textColorShadowLight: 'rgba(255, 255, 255, 0.4)',
  textColorShadowOpacity06: 'rgba(255, 255, 255, 0.65)',
  textColorShadowOpacity07: 'rgba(255, 255, 255, 0.75)',
  textColorShadowDark: 'rgba(255, 255, 255, 0.85)',
  textColorShadowOpacity09: 'rgba(255, 255, 255, 0.95)',

  // === BORDERS ===
  borderColor: 'rgba(255, 255, 255, 0.1)',
  borderColorMid: 'rgba(255, 255, 255, 0.08)',
  borderColorDark: 'rgba(255, 255, 255, 0.05)',
  borderGlow: 'rgba(139, 92, 246, 0.3)', // Purple glow for borders

  // === SEMANTIC COLORS ===
  // Success (Vibrant Emerald)
  success: '#10B981',
  successLight: '#34D399',
  successDark: '#059669',
  successBg: 'rgba(16, 185, 129, 0.15)',
  feedbackSuccess100: 'rgba(16, 185, 129, 0.15)',
  feedbackSuccess400: '#10B981',

  // Warning (Bright Amber)
  warning: '#F59E0B',
  warningLight: '#FCD34D',
  warningDark: '#D97706',
  warningBg: 'rgba(245, 158, 11, 0.15)',
  feedbackWarning100: 'rgba(245, 158, 11, 0.15)',
  feedbackWarning300: '#F59E0B',

  // Error (Modern Rose)
  error: '#F43F5E',
  errorLight: '#FB7185',
  errorDark: '#E11D48',
  errorBg: 'rgba(244, 63, 94, 0.15)',
  errorBgColor: '#F43F5E',
  errorTextColor: '#FCA5A5',
  errorTextShadow: 'rgba(252, 165, 165, 0.7)',
  feedbackError200: 'rgba(244, 63, 94, 0.15)',
  feedbackError600: '#F43F5E',

  // Info/Balance (Cyan)
  positiveBalanceColor: '#06B6D4',

  // Freeze states
  freeze100: 'rgba(100, 116, 139, 0.2)',
  freeze300: '#64748B',

  // Card warnings
  cardWarning100: 'rgba(245, 158, 11, 0.15)',
  cardWarning200: '#FBBF24',

  // === COMPONENT SPECIFIC ===
  tabBarBackground: '#1A1F2E',
  cardForeground: '#FFFFFF',
  secondary: '#1F2937',
  secondaryForeground: '#FFFFFF',

  // Muted variations
  muted: '#64748B',
  mutedForeground: '#CBD5E1',
  lowContrastDetail: '#1F2937',
  midContrastDetail: '#64748B',
  darkContrastDetail: '#CBD5E1',

  // Neutral scale
  neutral100: '#FFFFFF',
  neutral200: '#E2E8F0',
  neutral300: '#CBD5E1',
  neutral400: '#94A3B8',
  neutral500: '#64748B',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1E293B',
  neutral900: '#0F172A',

  // === SPECIAL EFFECTS ===
  // Gradient overlays
  gradientPurple: ['#8B5CF6', '#A855F7'],
  gradientCyan: ['#06B6D4', '#22D3EE'],
  gradientSuccess: ['#10B981', '#34D399'],
  gradientError: ['#F43F5E', '#FB7185'],

  // Shadow colors
  shadowPrimary: 'rgba(139, 92, 246, 0.3)',
  shadowAccent: 'rgba(6, 182, 212, 0.3)',
  shadowDark: 'rgba(0, 0, 0, 0.5)',
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
