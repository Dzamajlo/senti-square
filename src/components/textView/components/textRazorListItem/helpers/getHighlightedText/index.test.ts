import { describe, expect, test } from 'vitest';

import { textRazorEntitiesMock } from '@/mocks/textRazorEntities';
import type { TextRazorEntity } from '@/model';

import { getHighlightedText } from '.';

describe('testing getHighlightedText helper function', () => {
  test('should return original text when no entities are provided', () => {
    // Arrange
    const originalText = 'test text';
    const entities: TextRazorEntity[] = [];

    // Act
    const result = getHighlightedText(originalText, entities);

    // Assert
    expect(result).toEqual([originalText]);
  });

  test('should highlight single entity correctly', () => {
    // Arrange
    const text = 'The hygiene package';
    const entities = textRazorEntitiesMock.textRazorEntities;

    // Act
    const result = getHighlightedText(text, entities);

    // Assert
    expect(result).toHaveLength(3);
    expect(result[0]).toBe('The ');
    expect(result[1]).toMatchObject({
      type: 'mark',
      props: {
        style: { fontWeight: 'bold' },
        children: 'hygiene',
      },
    });
    expect(result[2]).toBe(' package');
  });

  test('should highlight multiple entities correctly', () => {
    // Arrange
    const text = textRazorEntitiesMock.originalText;
    const entities = textRazorEntitiesMock.textRazorEntities;

    // Act
    const result = getHighlightedText(text, entities);

    // Assert
    expect(result).toHaveLength(5);

    expect(result[0]).toBe('The ');
    expect(result[2]).toBe(
      ' package has given rise to debate in several Member States, including ',
    );
    expect(result[4]).toBe('.');

    // Check the highlighted segments
    expect(result[1]).toMatchObject({
      type: 'mark',
      props: {
        style: { fontWeight: 'bold' },
        children: 'hygiene',
      },
    });
    expect(result[3]).toMatchObject({
      type: 'mark',
      props: {
        style: { fontWeight: 'bold' },
        children: 'Sweden',
      },
    });
  });

  test('should handle overlapping entities by highlighting the longer match', () => {
    // Arrange
    const text = 'The hygiene package';
    const entities = [
      {
        id: 0,
        entityId: 'Hygiene',
        matchedText: 'hygiene',
        startingPos: 4,
        endingPos: 11,
      },
      {
        id: 1,
        entityId: 'HygienePackage',
        matchedText: 'hygiene package',
        startingPos: 4,
        endingPos: 19,
      },
    ];

    // Act
    const result = getHighlightedText(text, entities);

    // Assert
    expect(result).toHaveLength(3);
    expect(result[0]).toBe('The ');
    expect(result[1]).toMatchObject({
      type: 'mark',
      props: {
        style: { fontWeight: 'bold' },
        children: 'hygiene package',
      },
    });
    expect(result[2]).toBe('');
  });
});
