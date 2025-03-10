import { Button } from "@/components/ui/button";
import { dataCreator } from "./data";
import { useStepConfig } from "@/hooks/useStepConfig";
import { useState } from "react";

export function StepOne() {
  const { setInfoUser, nextStep } = useStepConfig();
  const [selectedValue, setSelectedValue] = useState("");

  const selectedValueClass = "bg-black text-white hover:opacity-85";

  const handleClick = (value: string) => {
    setSelectedValue(value);
    setInfoUser((prevState) => ({
      ...prevState,
      typeUser: value,
    }));
  };

  return (
    <section className="text-center">
      <h2 className="text-2xl">Tell us about yourself</h2>
      <p>This help up personalize your experience.</p>
      <ul className="grid gap-2 mt-4">
        {dataCreator.map(({ title, value }) => (
          <li
            key={value}
            className={`flex justify-center rounded-full border py-2 transition-all duration-300 cursor-pointer  ${
              selectedValue === value ? selectedValueClass : "hover:bg-gray-100"
            }`}
            onClick={() => handleClick(value)}
          >
            {title}
          </li>
        ))}
      </ul>

      <Button
        className="mt-4 w-full"
        onClick={() => {
          if (selectedValue === "") return;
          nextStep();
        }}
      >
        Continue
      </Button>
    </section>
  );
}
