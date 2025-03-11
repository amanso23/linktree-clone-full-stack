import { Input } from "@/components/ui/input";
import { dataStepFourImages } from "./data";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import { UploadButton } from "@/lib/uploadthing";
import { Plus } from "lucide-react";

export function StepFour() {
  const { infoUser, setInfoUser } = useStepConfig();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(infoUser.avatarUrl);
  const [photoUrl, setPhotoUrl] = useState("");
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");

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

      <ul className="grid md:grid-cols-5 place-items-center mt-4">
        {dataStepFourImages.map(({ src }) => (
          <li
            key={src}
            onClick={() => {
              setSelectedAvatar(src);
              setAvatarUrl(src);
            }}
          >
            <Image
              src={src}
              alt="Profile"
              className={`max-w-20 min-h-20 rounded-full cursor-pointer transition-all duration-300 hover:border-black border-3 ${
                selectedAvatar === src && "border-black "
              } `}
              width={300}
              height={300}
            />
          </li>
        ))}

        {photoUrl && (
          <Image
            src={photoUrl}
            alt="ProfilePhoto"
            width={300}
            height={300}
            className={`max-w-20 min-h-20 rounded-full cursor-pointer border-3 ${
              selectedAvatar === photoUrl && "border-black"
            }`}
            onClick={() => {
              setSelectedAvatar(photoUrl);
              setAvatarUrl(photoUrl);
            }}
          />
        )}

        {showUploadPhoto ? (
          <UploadButton
            className="rounded-md text-black bg-slate-200 px-2 py-2 max-w-20 min-h-10"
            endpoint={"profileImage"}
            onClientUploadComplete={(res) => {
              setPhotoUrl(res?.[0].ufsUrl);
              setShowUploadPhoto(false);
            }}
            onUploadError={(error: Error) => {
              console.error(`ERROR! ${error.message}`);
            }}
          />
        ) : (
          <div
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 border cursor-pointer w-20 min-h-20"
            onClick={() => setShowUploadPhoto(!showUploadPhoto)}
          >
            <Plus className="w-7 h-7" />
          </div>
        )}
      </ul>

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
