// src/grid.js
import { css } from 'glamor';

/**
 * Generate CSS Grid styles using Glamor
 * @param {Object} options - Grid layout configuration
 * @returns {Object} CSS rule
 */
export function gridContainer(options = {}) {
  const {
    columns = '1fr',
    rows = 'auto',
    gap = '0',
    justifyItems = 'stretch',
    alignItems = 'stretch',
  } = options;

  return css({
    display: 'grid',
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gap,
    justifyItems,
    alignItems,
  });
}

/**
 * Generate CSS styles for a grid item
 * @param {Object} options - Grid item configuration
 * @returns {Object} CSS rule
 */
export function gridItem(options = {}) {
  const { columnStart, columnEnd, rowStart, rowEnd } = options;

  return css({
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
  });
}
