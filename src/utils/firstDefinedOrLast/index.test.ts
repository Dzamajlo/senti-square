import { describe, expect, it } from 'vitest';

import { firstDefinedOrLast } from '.';

describe('firstDefinedOrLast', () => {
  it('should return the first defined value', () => {
    // arrange
    const value1 = 'value1';
    const value2 = 'value2';
    const value3 = 'value3';

    // act
    const result = firstDefinedOrLast(value1, value2, value3);

    // assert
    expect(result).toBe(value1);
  });

  it('should return the second defined value', () => {
    // arrange
    const value1 = undefined;
    const value2 = 'value2';
    const value3 = 'value3';

    // act
    const result = firstDefinedOrLast(value1, value2, value3);

    // assert
    expect(result).toBe(value2);
  });

  it('should return the third defined value', () => {
    // arrange
    const value1 = undefined;
    const value2 = undefined;
    const value3 = 'value3';

    // act
    const result = firstDefinedOrLast(value1, value2, value3);

    // assert
    expect(result).toBe(value3);
  });

  it('should return the second defined value if the first is empty string', () => {
    // arrange
    const value1 = '';
    const value2 = 'value2';
    const value3 = 'value3';

    // act
    const result = firstDefinedOrLast(value1, value2, value3);

    // assert
    expect(result).toBe(value2);
  });

  it('should return undefined if no values are defined', () => {
    // arrange
    const value1 = undefined;
    const value2 = undefined;
    const value3 = undefined;

    // act
    const result = firstDefinedOrLast(value1, value2, value3);

    // assert
    expect(result).toBeUndefined();
  });

  it('should return empty string if no values are defined', () => {
    // arrange
    const value1 = undefined;
    const value2 = undefined;
    const value3 = '';

    // act
    const result = firstDefinedOrLast(value1, value2, value3);

    // assert
    expect(result).toBe('');
  });
});
