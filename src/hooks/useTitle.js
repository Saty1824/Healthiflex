import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {document.title= `${title} | Healthiflex`}, [title])
  

  return null;
}
