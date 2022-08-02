/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */

import React, {createContext, useState} from 'react';
interface ContextState {
  request: any;
  toggleRequest: any;
}
interface Props {
    children: React.ReactNode;
  }
const RequestContext = createContext<ContextState>({
  request: -1,
  toggleRequest: () => {},
});

function RequestProvider({children}: Props) {
  const [request, setRequest] = useState(-1);
  function toggleRequest(request: any) {
    setRequest(request);
  }

  const value: ContextState = {
    request: request,
    toggleRequest: toggleRequest,
  };
  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
}
export {RequestContext, RequestProvider};
