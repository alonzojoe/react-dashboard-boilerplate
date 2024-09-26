import { useCallback, useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLayout } from "@/store/slices/ui-slice";
import { getStorageItem } from "@/lib/utils";

export const useSetLayout = () => {
  const dispatch = useDispatch();
  const storedLayout = getStorageItem("layout");
  const appLayout = useSelector((state) => state.ui.layout);

  useDebugValue(storedLayout, (layout) => `Stored layout: ${layout}`);

  const setCollapsed = useCallback(() => {
    dispatch(setLayout("layout-menu-collapsed"));
  }, [dispatch]);

  const setAppLayout = useCallback(() => {
    if (
      storedLayout === "layout-menu-collapsed" ||
      appLayout === "layout-menu-collapsed"
    )
      setCollapsed();
  }, [storedLayout, setCollapsed, appLayout]);

  return setAppLayout;
};
