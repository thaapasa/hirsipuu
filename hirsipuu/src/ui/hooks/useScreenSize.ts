import React from "react";

export function useWindowDimensions() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const listener = () => {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      // Update size, just in case initial size obtained on creation
      // is incorrect
      setSize(size);
    };
    listener();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [setSize]);

  return size;
}
