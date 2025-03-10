import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import { stepTwoData } from "./data";
import Image from "next/image";
import { useState } from "react";

export function StepTwo() {
  const { setInfoUser, infoUser, nextStep } = useStepConfig();
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  return (
    <section className="text-center">
      <h2 className="text-2xl">Which platforms are you</h2>
      <p>Pickup the ones you are on.</p>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {stepTwoData.map(({ name, icon }) => (
          <li
            key={name}
            className="flex flex-col gap-1 items-center justify-center rounded-lg border py-3 transition-all duration-300 hover:bg-gray-200 cursor-pointer"
          >
            <Image src={icon} alt="Icon" width={40} height={40} />
            <p className="text-sm">{name}</p>
          </li>
        ))}
      </ul>

      <Button className="mt-4">Continue</Button>
    </section>
  );
}
