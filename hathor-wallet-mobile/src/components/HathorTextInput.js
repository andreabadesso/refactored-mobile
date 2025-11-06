/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { TextInput } from 'react-native';
import { COLORS } from '../styles/themes';

const HathorTextInput = (props) => (
  <TextInput
    {...props}
    style={[{
      width: 100,
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 16,
      borderColor: COLORS.borderColor,
      borderWidth: 2,
      color: COLORS.textColor,
      backgroundColor: COLORS.card,
      fontSize: 17,
      fontWeight: '500',
      shadowColor: COLORS.shadowDark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 2,
      minHeight: 56,
    }, props.style]}
    placeholderTextColor={COLORS.textMuted}
    keyboardAppearance='dark'
  />
);

export default HathorTextInput;
