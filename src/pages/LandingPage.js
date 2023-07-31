import Main from "../Components/Main/Main";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 900);

  return <Main key={debouncedSearch} search={debouncedSearch} />;
}