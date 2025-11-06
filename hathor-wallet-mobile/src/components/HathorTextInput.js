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
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      borderColor: COLORS.borderColor,
      borderWidth: 1.5,
      color: COLORS.textColor,
      backgroundColor: COLORS.card,
      fontSize: 16,
      fontWeight: '500',
      shadowColor: COLORS.shadowDark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 3,
    }, props.style]}
    placeholderTextColor={COLORS.textSecondary}
    keyboardAppearance='dark'
  />
);

export default HathorTextInput;
