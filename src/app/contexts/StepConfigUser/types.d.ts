export type StepConfigUserContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  infoUser: InfoUserType;
  setInfoUser: React.Dispatch<React.SetStateAction<InfoUserType>>;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
};

type InfoUserType = {
  typeUser: string;
  name: string;
  links: {
    icon: string;
    link: string;
    name: string;
  }[];
  avatarUrl: string;
  username: string;
};

export type StepConfigUserProviderProps = {
  children: React.ReactNode;
};
