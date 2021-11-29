import React from "react";

export function useWindowDimensions() {
  const [size, setSize] = React.useState({
    width: window.document.body.offsetWidth,
    height: window.document.body.offsetHeight,
  });

  React.useEffect(() => {
    const listener = () => {
      setSize({
        width: window.document.body.offsetWidth,
        height: window.document.body.offsetHeight,
      });
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [setSize]);

  return size;
}
