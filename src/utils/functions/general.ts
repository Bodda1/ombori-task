/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : general.ts
* Description       : This file contains the general utility functions
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

export const checkIfAPIResponseIsSuccess = (responseCode: number) =>
  responseCode >= 200 && responseCode < 300;
