import React, { useEffect, useRef } from "react";

type Props = {
  location: { x: number; y: number };
  onClose: Function;
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

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      className="popUp"
      style={{
        position: "absolute",
        top: props.location.y,
        left: props.location.x
      }}
      ref={wrapperRef}
    >
      {props.children}
    </div>
  );
};
