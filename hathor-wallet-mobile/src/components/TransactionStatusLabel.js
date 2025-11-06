/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { t } from 'ttag';
import { COLORS } from '../styles/themes';
import { CircleCheck } from './Icons/CircleCheck.icon';
import { CircleClock } from './Icons/CircleClock.icon';
import { CircleError } from './Icons/CircleError.icon';

const styles = StyleSheet.create({
  wrapper: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderRadius: 100,
    paddingVertical: 8,
    paddingLeft: 16,
    paddingRight: 18,
    borderWidth: 1.5,
  },
  label: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  feedbackSuccess: {
    backgroundColor: COLORS.successBg,
    borderColor: COLORS.neonGreen,
    color: COLORS.neonGreen,
  },
  feedbackWarning: {
    backgroundColor: COLORS.warningBg,
    borderColor: COLORS.neonOrange,
    color: COLORS.neonOrange,
  },
  feedbackError: {
    backgroundColor: COLORS.errorBg,
    borderColor: COLORS.neonRed,
    color: COLORS.neonRed,
  },
  freeze: {
    backgroundColor: COLORS.freeze100,
    borderColor: COLORS.freeze300,
    color: COLORS.freeze300,
  },
});

/**
 * @param {Object} param
 * @param {string} param.label Status text as label
 * @param {Object} param.style Style props to customize the base component
 * @param {Object} param.children Icon component to compose with the label
 */
const TransactionStatusBase = ({ label, style, children: icon }) => (
  <View style={[styles.wrapper, style]}>
    <View>{icon}</View>
    <View>
      <Text style={[styles.label, style]}>
        {label.toUpperCase()}
      </Text>
    </View>
  </View>
);

const Executed = () => (
  <TransactionStatusBase style={styles.feedbackSuccess} label={t`Executed`}>
    <CircleCheck size={16} color={styles.feedbackSuccess.color} />
  </TransactionStatusBase>
);
const Processing = () => (
  <TransactionStatusBase style={styles.feedbackWarning} label={t`Processing`}>
    <CircleClock size={16} color={styles.feedbackWarning.color} />
  </TransactionStatusBase>
);
const Voided = () => (
  <TransactionStatusBase style={styles.feedbackError} label={t`Voided`}>
    <CircleError size={16} color={styles.feedbackError.color} />
  </TransactionStatusBase>
);

/**
 * @description
 * This component was devised to be used in Nano Contract context
 * to provide a visual indication for transaction "status".
 * @param {Object} param
 * @param {boolean} param.hasFirstBlock It indicates if a transaction has a first block
 * @param {boolean} param.isVoided Transaction's void flag
 */
export const TransactionStatusLabel = ({ hasFirstBlock, isVoided = false }) => {
  if (isVoided) {
    return Voided();
  }

  if (hasFirstBlock) {
    return Executed();
  }

  return Processing();
};
