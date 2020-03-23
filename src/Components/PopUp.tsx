import React, { useEffect, useRef } from "react";

type Props = {
  location?: { x: number; y: number };
  onClose: Function;
  style?: React.CSSProperties;
  className?: string;
};

export const PopUp: React.FunctionComponent<Props> = props => {
  function useOutsideAlerter(ref: any) {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.onClose();
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  const style: React.CSSProperties = {
    background: "white",
    top: props?.location?.y || undefined,
    left: props?.location?.x || undefined,
    width: 250
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      className={"popUp " + props.className || ""}
      ref={wrapperRef}
      style={Object.assign(style, props.style)}
    >
      {props.children}
    </div>
  );
};
