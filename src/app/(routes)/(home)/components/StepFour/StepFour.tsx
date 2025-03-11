import { Input } from "@/components/ui/input";
import { dataStepFourImages } from "./data";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import { UploadButton } from "@/lib/uploadthing";

export function StepFour() {
  const { infoUser, setInfoUser } = useStepConfig();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(infoUser.avatarUrl);

  const handleContinue = () => {
    setInfoUser((prevState) => {
      return {
        ...prevState,
        name: name,
        username: username,
        avatarUrl: avatarUrl,
      };
    });
  };

  return (
    <section className="text-center">
      <h2 className="text-2xl">Add profile details</h2>
      <p>Select your profile image or updload it.</p>

      <ul className="grid grid-cols-5 gap-4 items-center mt-4">
        {dataStepFourImages.map(({ src }) => (
          <li
            key={src}
            onClick={() => {
              setAvatarUrl(src);
            }}
          >
            <Image
              src={src}
              alt="Profile"
              className="w-30 h-20 rounded-full cursor-pointer transition-all duration-300 "
              width={300}
              height={300}
            />
          </li>
        ))}
      </ul>

      <UploadButton
        className="rounded-md text-black bg-slate-200 px-2 py-2"
        endpoint={"profileImage"}
        onClientUploadComplete={(res) => {}}
      />

      <div className="mt-4">
        {/* <h2 className="mb-3 text-center text-lg">Add your username</h2> */}
        <div className="grid gap-3 w-full">
          <Input
            placeholder="Add your name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            placeholder="Add your username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
      </div>

      <Button className="mt-4 w-full" onClick={handleContinue}>
        Continue
      </Button>
    </section>
  );
}
