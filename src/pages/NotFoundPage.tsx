import { useEffect } from 'react';

import initApp from 'utils/functions/init';
import { contexts } from 'constants/context';
import NotFoundView from 'modules/general/views/NotFoundView';

// ###############################################################
// <------------------------ Constants -------------------------->
// ###############################################################
// ###############################################################
// <---------------------- End Constants ------------------------>
// ###############################################################
const NotFoundPage = () => {
  // ###############################################################
  // <------------------------- Globals --------------------------->
  // ###############################################################
  // ###############################################################
  // <----------------------- End Globals ------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ useState --------------------------->
  // ###############################################################
  // ###############################################################
  // <---------------------- End useState ------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ useEffect -------------------------->
  // ###############################################################
  useEffect(() => {
    initApp(contexts.notFound);
  }, []);
  // ###############################################################
  // <---------------------- End useEffect ------------------------>
  // ###############################################################
  // ###############################################################
  // <--------------------- rest of hooks ------------------------->
  // ###############################################################
  // ###############################################################
  // <-------------------- End rest of hooks ---------------------->
  // ###############################################################
  // ###############################################################
  // <-------------------------- Logic ---------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ End Logic -------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------- Actions --------------------------->
  // ###############################################################
  // ###############################################################
  // <----------------------- End Actions ------------------------->
  // ###############################################################
  // ###############################################################
  // <----------------------- UI Handlers ------------------------->
  // ###############################################################
  // ###############################################################
  // <--------------------- End UI Handlers ----------------------->
  // ###############################################################
  // ###############################################################
  // <-------------------------- Render --------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ End Render ------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------- Return UI ------------------------->
  // ###############################################################
  return <NotFoundView />;
  // ###############################################################
  // <----------------------- End Return UI ----------------------->
  // ###############################################################
};

NotFoundPage.propTypes = {};

NotFoundPage.defaultProps = {};

export default NotFoundPage;
