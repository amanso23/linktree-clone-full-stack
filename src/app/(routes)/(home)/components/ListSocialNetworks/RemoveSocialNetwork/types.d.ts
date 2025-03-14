import { Link } from "@prisma/client";

export type RemoveSocialNetworkProps = {
  link: Link;
  onReload: React.Dispatch<React.SetStateAction<boolean>>;
};
