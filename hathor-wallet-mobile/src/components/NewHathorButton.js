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
    height: 52,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // Modern shadow with purple glow
    shadowColor: COLORS.shadowPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  wrapperDisabled: {
    backgroundColor: COLORS.muted,
    shadowOpacity: 0,
    elevation: 0,
    opacity: 0.5,
  },
  wrapperSecondary: {
    backgroundColor: 'transparent',
    borderColor: COLORS.borderGlow,
    borderWidth: 2,
    shadowColor: COLORS.shadowDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  wrapperSecondaryDisabled: {
    borderColor: COLORS.muted,
    opacity: 0.4,
  },
  wrapperDiscrete: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  wrapperSecondaryDanger: {
    borderColor: COLORS.error,
    backgroundColor: COLORS.errorBg,
    shadowColor: COLORS.error,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
    color: COLORS.white,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  textSecondary: {
    color: COLORS.textColor,
  },
  textSecondaryDisabled: {
    color: COLORS.muted,
  },
  textDisabled: {
    color: COLORS.mutedForeground,
  },
  textDiscrete: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  textSecondaryDanger: {
    color: COLORS.error,
    fontWeight: 'bold',
  },
});

export default NewHathorButton;
