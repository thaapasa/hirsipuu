import React from "react";

export function useElementSize() {
  const [size, setSize] = React.useState({
    width: 0,
    height: 0,
  });
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setSize({
      width: ref.current?.offsetWidth ?? 0,
      height: ref.current?.offsetHeight ?? 0,
    });
  }, [setSize]);

  React.useEffect(() => {
    const listener = () => {
      setSize({
        width: ref.current?.offsetWidth ?? 0,
        height: ref.current?.offsetHeight ?? 0,
      });
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [setSize]);

  return { ref, size };
}
