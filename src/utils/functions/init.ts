/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : init.ts
* Description       : this file contains the main init function that gets called in all pages
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

import { setContext } from 'modules/common/reducer';

import store from '../../redux/store';

const initApp = (context: string) => {
  store.dispatch(setContext(context));
};

export default initApp;
