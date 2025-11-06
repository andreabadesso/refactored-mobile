/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  Image, StyleSheet, View, Text, TouchableHighlight,
} from 'react-native';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import chevronRight from '../assets/icons/chevron-right.png';
import Spinner from './Spinner';
import { renderValue, isTokenNFT } from '../utils';
import { TOKEN_DOWNLOAD_STATUS } from '../sagas/tokens';
import { COLORS } from '../styles/themes';
import { HathorFlatList } from './HathorFlatList';

/**
 * @typedef TokenBalance
 * @property {number} data.available
 * @property {string} status
 */

/**
 * @param {Object} props
 * @param {Record<string,TokenBalance>} props.tokensBalance
 * @param {{ uid: string }} props.selectedToken
 * @param {unknown} props.tokenMetadata
 * @param {{ [uid: string]: { uid: string; name: string; symbol: string; }}} props.tokens
 * @param {unknown} props.header
 * @param {boolean} props.renderArrow
 * @param {function} props.onItemPress
 */
const TokenSelect = (props) => {
  const tokens = Object.values(props.tokens);
  const renderItem = ({ item }) => {
    const symbolWrapperStyle = [styles.symbolWrapper];
    const symbolTextStyle = [styles.text, styles.leftText, styles.symbolText];
    if (props.selectedToken && props.selectedToken.uid === item.uid) {
      symbolWrapperStyle.push(styles.symbolWrapperSelected);
      symbolTextStyle.push(styles.symbolTextSelected);
    }

    const balance = get(props.tokensBalance, `${item.uid}.data.available`, 0);
    const tokenState = get(props.tokensBalance, `${item.uid}.status`, 'loading');

    return (
      <TouchableHighlight
        onPress={() => { props.onItemPress(item); }}
        underlayColor={COLORS.primaryOpacity30}
      >
        <View style={styles.itemWrapper}>
          <View style={styles.itemLeftWrapper}>
            <View style={symbolWrapperStyle}>
              <Text style={symbolTextStyle}>{item.symbol}</Text>
            </View>
            <Text style={[styles.text, styles.leftText]}>{item.name}</Text>
          </View>
          <View style={styles.itemLeftWrapper}>
            <Text style={[styles.text, styles.rightText]}>
              {tokenState === TOKEN_DOWNLOAD_STATUS.READY && (
                renderValue(
                  balance,
                  isTokenNFT(item.uid, props.tokenMetadata)
                )
              )}

              {tokenState === TOKEN_DOWNLOAD_STATUS.FAILED && (
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  color={COLORS.errorTextShadow}
                  style={{ fontSize: 14 }}
                />
              )}

              {tokenState === TOKEN_DOWNLOAD_STATUS.LOADING && (
                <Spinner size={14} animating />
              )}

              {' '}

              {item.symbol}
            </Text>
            {props.renderArrow
              && <Image style={{ marginLeft: 8 }} source={chevronRight} width={24} height={24} />}
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.wrapper}>
      {props.header}
      <HathorFlatList
        data={tokens}
        // use extraData to make sure list updates (props.tokens might remain the same object)
        extraData={[props.tokensBalance, props.selectedToken.uid]}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const ItemSeparator = () => (
  <View style={{ height: 16 }} />
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 16,
  },
  itemWrapper: {
    minHeight: 104,
    marginHorizontal: 20,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    shadowColor: COLORS.shadowDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 2,
  },
  itemLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbolWrapper: {
    width: 56,
    height: 56,
    backgroundColor: COLORS.primaryOpacity10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderRadius: 18,
  },
  text: {
    lineHeight: 24,
    color: COLORS.textColor,
  },
  rightText: {
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: -0.3,
    color: COLORS.textColor,
  },
  leftText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.textColor,
  },
  symbolText: {
    fontWeight: '800',
    fontSize: 20,
    color: COLORS.primary,
  },
  symbolTextSelected: {
    color: COLORS.white,
  },
  symbolWrapperSelected: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
});

export default TokenSelect;
