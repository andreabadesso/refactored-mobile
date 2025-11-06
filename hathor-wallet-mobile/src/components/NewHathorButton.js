/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity
} from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { COLORS } from '../styles/themes';

const NewHathorButton = (props) => {
  const wrapperViewStyle = [style.wrapper];
  const textStyle = [style.text];
  if (props.disabled) {
    wrapperViewStyle.push(style.wrapperDisabled);
    textStyle.push(style.textDisabled);
  }

  if (props.discrete) {
    wrapperViewStyle.push(style.wrapperDiscrete);
    textStyle.push(style.textDiscrete);
  }

  if (props.secondary) {
    wrapperViewStyle.push(style.wrapperSecondary);
    textStyle.push(style.textSecondary);

    if (props.disabled) {
      wrapperViewStyle.push(style.wrapperSecondaryDisabled);
      textStyle.push(style.textSecondaryDisabled);
    } else if (props.color) {
      wrapperViewStyle.push({ borderColor: props.color });
      textStyle.push({ color: props.color });
    }
  }

  if (props.danger) {
    wrapperViewStyle.push(style.wrapperSecondaryDanger);
    textStyle.push(style.textSecondaryDanger);
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        ...wrapperViewStyle,
        props.wrapperStyle,
        props.style
      ]}
    >
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[...textStyle, props.textStyle]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

NewHathorButton.propTypes = {
  // The title of the button.
  title: PropTypes.string,

  // Optional. Used to disable the button.
  disabled: PropTypes.bool,

  // Optional. Style used in the button container.
  wrapperStyle: ViewPropTypes.style,

  // Optional. Indicates it is a secondary action in the screen.
  secondary: PropTypes.bool,

  // Optional. The color of the button.
  // It is only supported for secondary buttons and changes both the border and the text color.
  color: PropTypes.string,
};

const style = StyleSheet.create({
  wrapper: {
    height: 56,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignSelf: 'stretch',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // DRAMATIC purple glow shadow
    shadowColor: COLORS.shadowPrimaryStrong,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 12,
  },
  wrapperDisabled: {
    backgroundColor: COLORS.muted,
    shadowOpacity: 0,
    elevation: 0,
    opacity: 0.4,
  },
  wrapperSecondary: {
    backgroundColor: 'rgba(168, 85, 247, 0.08)',
    borderColor: COLORS.borderNeon,
    borderWidth: 2,
    shadowColor: COLORS.shadowPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  wrapperSecondaryDisabled: {
    borderColor: COLORS.muted,
    backgroundColor: 'transparent',
    opacity: 0.3,
  },
  wrapperDiscrete: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
    height: 48,
  },
  wrapperSecondaryDanger: {
    borderColor: COLORS.error,
    backgroundColor: COLORS.errorBg,
    shadowColor: COLORS.errorGlow,
    shadowOpacity: 0.5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    color: COLORS.white,
    textAlign: 'center',
    letterSpacing: 1,
  },
  textSecondary: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  textSecondaryDisabled: {
    color: COLORS.muted,
  },
  textDisabled: {
    color: COLORS.mutedForeground,
  },
  textDiscrete: {
    color: COLORS.primary,
    fontWeight: '700',
    textTransform: 'none',
  },
  textSecondaryDanger: {
    color: COLORS.error,
    fontWeight: 'bold',
  },
});

export default NewHathorButton;
