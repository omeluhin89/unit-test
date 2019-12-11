// eslint-disable-next-line import/extensions
import indicatorHealth from '../index';

describe('checkHealth', () => {
  it('return status healthy', () => {
    expect(indicatorHealth({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  it('return status wounded', () => {
    expect(indicatorHealth({ name: 'Маг', health: 45 })).toBe('wounded');
  });

  it('return status critical', () => {
    expect(indicatorHealth({ name: 'Маг', health: 14 })).toBe('critical');
  });
});
