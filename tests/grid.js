// tests/grid.test.js
import { gridContainer, gridItem } from '../src/grid';

test('gridContainer generates correct styles', () => {
  const styles = gridContainer({
    columns: 'repeat(3, 1fr)',
    rows: 'auto',
    gap: '10px',
  });
  expect(styles).toMatchSnapshot();
});

test('gridItem generates correct styles', () => {
  const styles = gridItem({
    columnStart: 1,
    columnEnd: 3,
  });
  expect(styles).toMatchSnapshot();
});
