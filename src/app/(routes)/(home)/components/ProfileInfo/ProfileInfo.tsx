import { StepConfigUserContextType } from "@/contexts/StepConfigUser/types";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ProfileInfoProps } from "./types";

export function ProfileInfo({ onReload }: ProfileInfoProps) {
  const [infoUser, setInfoUser] = useState<
    StepConfigUserContextType["infoUser"] | null
  >(null);

  useEffect(() => {
    const getInfoUser = async () => {
      const response = await axios.get("api/info-user");
      const { data } = response;
      console.log(data);

      setInfoUser(data);
    };

    getInfoUser();
  }, []);

  if (infoUser) {
    return (
      <section className="text-center">
        <div className="flex flex-col items-center mt-4 gap-1">
          <Image
            src={infoUser.avatarUrl}
            width={300}
            height={300}
            className="rounded-full max-w-20 min-h-20  object-cover "
            alt="ProfilePhoto"
          />

          <h1 className="text-2xl font-semibold text-black">{infoUser.name}</h1>
          <h3>@{infoUser.username}</h3>
          <span className="px-4 py-1 text-xs border rounded-full">
            {infoUser.typeUser}
          </span>

          <ul className="flex flex-col self-start gap-4 mt-2">
            {infoUser.links.map(({ icon, link, name }) => (
              <li key={name}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={link}
                  title={`Link to my ${name}`}
                  className="flex items-center gap-2"
                >
                  <Image src={icon} alt="SocialIcon" width={30} height={30} />
                  <p>{name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
