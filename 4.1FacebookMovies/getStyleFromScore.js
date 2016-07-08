'use strict';

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { StyleObject } from 'StyleSheetTypes';

const MAX_VALUE = 200;

export default function getStyleFromScore(score: number): StyleObject {
  if (score < 0) {
    return styles.noScore;
  }
  var normalizedScore = Math.round((score / 100) * MAX_VALUE);
  return {
    color: 'rgb(' +
      (MAX_VALUE - normalizedScore) + ',' +
      normalizedScore + ', ' +
      0 +
      ')'
  };
}

const styles = StyleSheet.create({
  noScore: {
    color: '#999999',
  },
});
