import type { InputElementProps } from "@/types";
import { forwardRef } from "react";

const InputElement = forwardRef<HTMLInputElement, InputElementProps>((props, ref) => {
  const { handleChange, ...otherProps } = props;
  return <input ref={ref} {...otherProps} onChange={handleChange} />;
});

InputElement.displayName = "InputElement";

export default InputElement;
