import React, { useState } from "react";
import useStatus from "../Hooks/useStatus";

export const CustomHook = () => {
  const [single, getSingle] = useStatus(true);
  const [job, getJob] = useStatus(false);

  return (
    <div>
      <p onClick={getSingle}>
        {single ? "I am single" : "I am not single"}
      </p>{" "}
      <p onClick={getJob}>
        {job ? "I am doing Job" : "I am searching Job"}
      </p>
    </div>
  );
};
