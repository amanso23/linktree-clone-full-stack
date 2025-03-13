export type TabDeleteProps = {
  setShowTab: React.Dispatch<React.SetStateAction<"upload" | "delete" | null>>;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
