"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FormProps } from "./types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { linksSocialNetworks } from "@/data/linksSocialNetworks";
import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";

const addLinkFormSchema = z.object({
  icon: z.string().optional(),
  link: z
    .string()
    .min(2, {
      message: "Link  must be at least 2 characters.",
    })
    .max(200),
  name: z
    .string()
    .min(1, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
});

export function AddLinkForm({ onReload, setShowDialog }: FormProps) {
  const { links, reloadUser } = useUserInfo();
  const form = useForm<z.infer<typeof addLinkFormSchema>>({
    resolver: zodResolver(addLinkFormSchema),
    defaultValues: {
      icon: "",
      link: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof addLinkFormSchema>) => {
    const response = await axios.post("/api/link", {
      data: values,
    });

    if (response.status === 200) {
      toast("Created new link", {
        description: "Link created successfully",
      });
      setShowDialog(false);
      onReload((prevState) => !prevState);
      reloadUser();
    }
  };

  const getNotSelectedSocialLinks = () => {
    if (!links) return linksSocialNetworks;

    return linksSocialNetworks.filter(
      (link) => !links.some((l) => link.name === l.name)
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select your icon</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    field.onChange(value);
                    const selectedLink = linksSocialNetworks.find(
                      (link) => link.icon === value
                    );
                    if (selectedLink) {
                      form.setValue("name", selectedLink.name);
                    }
                  }}
                  value={field.value || ""}
                  className="flex flex-wrap gap-6 "
                >
                  {getNotSelectedSocialLinks().map(({ icon }) => (
                    <FormItem className="flex items-center " key={icon}>
                      <FormControl>
                        <RadioGroupItem value={icon} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        <Image src={icon} alt="Icon" width={40} height={40} />
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Enter URL</FormLabel>
              <FormControl>
                <Input placeholder="URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Enter URL</FormLabel>
              <FormControl>
                <Input placeholder="Name will be autofilled" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
