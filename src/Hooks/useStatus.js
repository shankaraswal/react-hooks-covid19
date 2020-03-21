import { useState } from "react";

const useStatus = (ival = false) => {
  const [status, setStatus] = useState(ival);
  const getStatus = () => {
    setStatus(!status);
  };
  return [status, getStatus];
};
export default useStatus;
