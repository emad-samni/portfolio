import { useSearchParams } from "react-router-dom";

export const useLogic = () => {
  const [searchParamsFromRoute, setSearchParamsFromRoute] = useSearchParams();

  const handleShowPortofolioViewer = (id: string, projects_view: boolean) => {
    searchParamsFromRoute.set("project_id", id);
    searchParamsFromRoute.set(
      "projects_view",
      projects_view ? "true" : "false"
    );
    setSearchParamsFromRoute(searchParamsFromRoute);
  };

  return { handleShowPortofolioViewer };
};
