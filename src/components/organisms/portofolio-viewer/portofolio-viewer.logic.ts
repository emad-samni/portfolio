import { useCallback, useEffect, useRef } from "react";
import profileConfig from "../../../configs/profile.config";
import { InitDetail } from "lightgallery/lg-events";

export interface IParams {
  open?: boolean;
  onClose?: () => void;
  projectId?: string | null;
  projects_view: boolean;
}

export const useLogic = (params: IParams) => {
  const { projectId, open, projects_view } = params;
  console.log(projects_view);
  const lightGallery = useRef<any>(null);

  const onInit = useCallback((detail: InitDetail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const { projects } = profileConfig;
  const { volunteering } = profileConfig;
  const items = projects_view
    ? projects.find((item) => item.id === projectId)?.data
    : volunteering.find((item) => item.id === projectId)?.data;

  useEffect(() => {
    lightGallery.current.refresh();
  }, [projectId]);

  useEffect(() => {
    if (open) lightGallery.current?.openGallery(0);
  }, [open]);

  return { items, onInit };
};
