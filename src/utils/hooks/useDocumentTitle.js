import { useRef, useEffect } from "react";

/**
 *
 * @param {string} title title value
 * @param {boolean} prevailOnUnmount value to define if the title must prevail
 */
function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
}

export default useDocumentTitle;
