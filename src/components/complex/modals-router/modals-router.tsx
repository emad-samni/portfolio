import { FunctionComponent } from "react";
import AboutMeModal from "../../organisms/about-me-modal/about-me-modal";
import PortofolioViewer from "../../organisms/portofolio-viewer/portofolio-viewer";
import { useLogic } from "./modals-router.logic";

interface ModalsRouterProps {}

const ModalsRouter: FunctionComponent<ModalsRouterProps> = () => {
  const {
    ProjectId,
    handleCloseAboutMeModal,
    handlePortofolioClose,
    showAboutMeModal,
    projects_view,
  } = useLogic();
  console.log(projects_view);

  return (
    <>
      <PortofolioViewer
        projects_view={projects_view}
        projectId={ProjectId}
        open={!!ProjectId}
        onClose={handlePortofolioClose}
      />
      <AboutMeModal open={showAboutMeModal} onClose={handleCloseAboutMeModal} />
    </>
  );
};

export default ModalsRouter;
