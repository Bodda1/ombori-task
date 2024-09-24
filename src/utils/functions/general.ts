export const checkIfAPIResponseIsSuccess = (responseCode: number) =>
  responseCode >= 200 && responseCode < 300;
