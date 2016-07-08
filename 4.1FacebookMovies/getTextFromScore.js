'use strict';

export default function getTextFromScore(score: number): string {
  return score > 0 ? score + '%' : 'N/A';
}
