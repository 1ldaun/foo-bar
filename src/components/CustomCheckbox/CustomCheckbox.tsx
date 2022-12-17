import React, { useState } from "react";
import S from "./customCheckbox.module.scss";

const CustomCheckbox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div onClick={() => setActive(!active)}>
      <input checked={active} type="checkbox" className={S.customCheckbox} />
      <label className={S.label}>{children}</label>
    </div>
  );
};

export default CustomCheckbox;
