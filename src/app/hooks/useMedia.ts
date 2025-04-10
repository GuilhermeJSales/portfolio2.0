import { useEffect, useState } from "react";

export function useMedia(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = matchMedia(query);
    const listener = () => setMatches(media.matches);

    setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
