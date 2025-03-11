import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import { stepTwoData } from "./data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InfoUserType } from "@/contexts/StepConfigUser/types";
import { platform } from "os";

export function StepTwo() {
  const { setInfoUser, infoUser, nextStep } = useStepConfig();
  const [selectedPlatforms, setSelectedPlatforms] = useState<
    InfoUserType["platforms"]
  >([]);

  console.log(infoUser);

  const selectedClass = "bg-black text-white hover:opacity-85";

  const handleClick = (icon: string, name: string, link: string) => {
    setSelectedPlatforms((prevState) => {
      if (prevState.some((state) => state.name === name)) {
        return prevState.filter((s) => s.name !== name);
      }
      return [...prevState, { icon, name, link }];
    });
  };

  useEffect(() => {
    setInfoUser((prevState) => {
      if (prevState.platforms !== selectedPlatforms) {
        return { ...prevState, platforms: selectedPlatforms };
      }
      return prevState;
    });
  }, [selectedPlatforms]);

  return (
    <section className="text-center">
      <h2 className="text-2xl">Which platforms are you</h2>
      <p>Pickup the ones you are on.</p>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {stepTwoData.map(({ name, icon, link }) => (
          <li
            key={name}
            className={`flex flex-col gap-1 items-center justify-center rounded-lg border py-3 transition-all duration-300 cursor-pointer ${
              selectedPlatforms.some((platform) => platform.name === name)
                ? selectedClass
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleClick(icon, name, link)}
          >
            <Image src={icon} alt="Icon" width={40} height={40} />
            <p className="text-sm">{name}</p>
          </li>
        ))}
      </ul>

      <Button className="mt-4 w-full">Continue</Button>
    </section>
  );
}
