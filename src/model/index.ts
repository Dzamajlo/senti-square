export type TextRazorEntity = {
  id: number;
  matchedText: string;
  startingPos: number;
  endingPos: number;
  entityId: string;
  type?: string[];
};
