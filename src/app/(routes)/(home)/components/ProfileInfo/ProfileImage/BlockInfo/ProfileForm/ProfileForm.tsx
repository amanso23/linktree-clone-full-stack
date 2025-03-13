"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormProps } from "./types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useUserInfo } from "@/hooks/useUser";
import axios from "axios";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must contain at least 2 character(s), 100 max.",
    })
    .max(100)
    .optional(),
  username: z
    .string()
    .min(2, {
      message: "Username must contain at least 2 character(s), 100 max.",
    })
    .max(100)
    .optional(),
  bio: z
    .string()
    .min(2, {
      message: "Bio must contain at least 2 character(s), 400 max.",
    })
    .max(400)
    .optional(),
});

export function ProfileForm({ setOpenDialog }: ProfileFormProps) {
  const { user, reloadUser } = useUserInfo();

  if (!user) return null;

  const { name, username, bio } = user;

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: username || "",
      name: name || "",
      bio: bio || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    const response = await axios.patch("/api/update-user", {
      name: values.name,
      username: values.username,
      bio: values.bio,
    });

    if (response.status === 200) {
      toast("User data uploaded", {
        description: "Your user data has been successfully uploaded.",
        duration: 3000,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo clicked"),
        },
      });
      reloadUser();
      setOpenDialog(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormDescription>
                This will be your displayed name across the platform.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Choose a unique username" {...field} />
              </FormControl>
              <FormDescription>Your username must be unique. </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your bio here..."
                  {...field}
                  maxLength={400}
                />
              </FormControl>
              <FormDescription>
                Introduce yourself to the community.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Save changes
        </Button>
      </form>
    </Form>
  );
}
