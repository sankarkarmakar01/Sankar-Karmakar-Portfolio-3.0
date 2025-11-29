"use client";

import React from "react";

const LocalTimezone: React.FC = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return <div className="text-xs text-neutral-400">{timezone}</div>;
};

export default LocalTimezone;
