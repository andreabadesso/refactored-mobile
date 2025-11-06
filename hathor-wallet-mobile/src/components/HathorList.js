/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import chevronRight from '../assets/icons/chevron-right.png';
import { COLORS } from '../styles/themes';

const defaultRadius = 16;

export class HathorList extends Component {
  style = StyleSheet.create({
    view: {
      alignSelf: 'stretch',
      backgroundColor: COLORS.card,
      borderRadius: 20,
      margin: 16,
      shadowOffset: { height: 4, width: 0 },
      shadowRadius: 16,
      shadowColor: COLORS.shadowDark,
      shadowOpacity: 0.08,
      elevation: 3,
      borderWidth: 1,
      borderColor: COLORS.borderColor,
    },
    title: {
      alignSelf: 'flex-start',
      paddingHorizontal: 24,
      paddingTop: 12,
      paddingBottom: 8,
      fontSize: 12,
      fontWeight: '700',
      color: COLORS.textSecondary,
      textTransform: 'uppercase',
      letterSpacing: 1.2,
    },
    infinityView: {
      flex: 1,
      marginBottom: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      paddingBottom: 16,
    },
  });

  render() {
    const style = [this.style.view];

    if (this.props.infinity) {
      style.push(this.style.infinityView);
    }

    return (
      <>
        {this.props.title && <Text style={[this.style.title]}>{this.props.title}</Text>}
        <View style={style}>
          {this.props.children}
        </View>
      </>
    );
  }
}

class BaseItem extends Component {
  static defaultProps = {
    isFirst: false,
    isLast: false,
  };

  style = StyleSheet.create({
    container: {
      borderColor: COLORS.borderColor,
      borderBottomWidth: 1,
    },
    lastItemContainer: {
      borderBottomWidth: 0,
    },
    firstItemView: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    lastItemView: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    view: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      alignItems: 'center',
      minHeight: 72,
      paddingLeft: 24,
      paddingRight: 24,
      paddingVertical: 16,
    },
    title: {
      flex: 1,
      fontSize: 14,
      color: COLORS.textColor,
    },
    text: {
      fontSize: 16,
      color: COLORS.textColor,
    },
  });

  getBorderStyles() {
    const style = [];
    if (this.props.isFirst) {
      style.push(this.style.firstItemView);
    }
    if (this.props.isLast) {
      style.push(this.style.lastItemView);
    }
    return style;
  }

  render() {
    const style = [this.style.container];
    if (this.props.isLast) {
      style.push(this.style.lastItemContainer);
    }
    return (
      <View style={style}>
        {this.renderInside()}
      </View>
    );
  }
}

export class ListItem extends BaseItem {
  style = Object.assign(this.style, StyleSheet.create({
    title: {
      ...this.style.title,
      color: COLORS.textColorShadow,
    },
  }));

  renderInside() {
    const { style } = this;
    return (
      <View style={[this.style.view, ...this.getBorderStyles()]}>
        {this.props.title
          && <Text style={[style.title, this.props.titleStyle]}>{this.props.title}</Text>}
        {(typeof (this.props.text) === 'string'
          ? <Text style={style.text}>{this.props.text}</Text>
          : this.props.text
        )}
      </View>
    );
  }
}

export class ListButton extends BaseItem {
  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  renderInside() {
    const borderStyles = this.getBorderStyles();
    return (
      <TouchableHighlight style={borderStyles} onPress={this.onPress}>
        <View style={[this.style.view, ...borderStyles]}>
          {(typeof (this.props.title) === 'string'
            ? <Text style={[this.style.title, this.props.titleStyle]}>{this.props.title}</Text>
            : this.props.title
          )}
          {this.props.button}
        </View>
      </TouchableHighlight>
    );
  }
}

export class ListMenu extends Component {
  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    return (
      <ListButton
        button={<Image source={chevronRight} width={24} height={24} />}
        {...this.props}
      />
    );
  }
}
