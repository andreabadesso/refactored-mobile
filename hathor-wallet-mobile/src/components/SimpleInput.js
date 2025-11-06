/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';

import InputLabel from './InputLabel';
import { COLORS } from '../styles/themes';

const SimpleInput = (props) => {
  const getInputField = () => (
    <TextInput
      {...props}
      style={styles.input}
      keyboardAppearance='dark'
      autoCorrect={false}
      spellCheck={false}
      autoCompleteType='off'
      underlineColorAndroid='transparent'
    />
  );

  const renderInput = () => (
    <View style={[styles.inputContainer, props.textInputStyle]}>
      { props.input || getInputField() }
    </View>
  );

  const renderText = () => <Text selectable style={styles.text}>{props.value}</Text>;

  const renderAuxiliarText = () => {
    let text = null;
    const style = [styles.auxiliarText];
    if (props.error) {
      text = props.error;
      style.push(styles.error);
    } else if (props.subtitle) {
      text = props.subtitle;
    }

    if (text) {
      return <Text style={style}>{text}</Text>;
    }
    return null;
  };

  return (
    <View style={props.containerStyle}>
      {props.label
        && (
        <InputLabel style={[styles.label, props.inputStyle]}>
          {props.label}
        </InputLabel>
        )}
      {/* If input is not editable, render only Text so we can select
        * it. If we used TextInput with editable=false, we would not
        * be able to select the text
        */}
      {props.editable === false ? renderText() : renderInput()}
      {renderAuxiliarText()}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.card,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 60,
    justifyContent: 'center',
    shadowColor: COLORS.shadowDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    lineHeight: 24,
    padding: 0,
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.textColor,
  },
  text: {
    color: COLORS.textColor,
    fontSize: 17,
    fontWeight: '500',
  },
  label: {
    marginBottom: 12,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textColor,
    letterSpacing: 0.2,
  },
  auxiliarText: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.textSecondary,
    paddingLeft: 4,
  },
  error: {
    color: COLORS.error,
    fontWeight: '600',
  },
});

export default SimpleInput;
