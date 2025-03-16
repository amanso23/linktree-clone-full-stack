"use client";

import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import Image from "next/image";

export function StepThree() {
  const { infoUser, setInfoUser, nextStep } = useStepConfig();

  const handleContinue = () => {
    const updatedLinks = infoUser.links.map(({ icon, name }) => {
      const input = document.getElementById(
        `${name}-input`
      ) as HTMLInputElement;

      return {
        name,
        icon,
        link: input.value ?? "",
      };
    });

    setInfoUser((prevState) => {
      return { ...prevState, links: updatedLinks };
    });

    nextStep();
  };

  return (
    <section className="text-center">
      <h2 className="text-2xl">Add your links</h2>
      <p>Complite the fields to add your links. </p>
      <ul className="flex flex-col gap-4 mt-4">
        {infoUser.links.map(({ icon, link, name }) => (
          <li key={name} className="flex items-center gap-2">
            <Image alt="Icon" src={icon} width={40} height={40} />
            <input
              id={`${name}-input`}
              type="text"
              placeholder={`Introduce your link to ${name}`}
              defaultValue={link}
              className="w-full px-2 py-2 border rounded"
            />
          </li>
        ))}
      </ul>
      <Button className="w-full mt-4" type="submit" onClick={handleContinue}>
        Continue
      </Button>
    </section>
  );
}
