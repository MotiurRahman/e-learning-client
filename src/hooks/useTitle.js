import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-E-Learning`;
  }, [title]);
};

export default useTitle;
