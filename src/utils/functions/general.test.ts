import { jest, describe, it, beforeAll, expect } from '@jest/globals';

describe('checkIfAPIResponseIsSuccess', () => {
  let checkIfAPIResponseIsSuccess: any;

  beforeAll(() => {
    const general = jest.requireActual('./general') as any;
    checkIfAPIResponseIsSuccess = general.checkIfAPIResponseIsSuccess;
  });

  /* ############################################################################################# */
  it('should return true if status code is 200', () => {
    const result = checkIfAPIResponseIsSuccess(200);

    expect(result).toBe(true);
  });
  /* ############################################################################################# */

  /* ############################################################################################# */
  it('should return false if status code is 500', () => {
    const result = checkIfAPIResponseIsSuccess(500);

    expect(result).toBe(false);
  });
  /* ############################################################################################# */
});
