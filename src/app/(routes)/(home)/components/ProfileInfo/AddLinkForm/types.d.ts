export interface AddLinkFormProps {
  onReload: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormProps extends AddLinkFormProps {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
