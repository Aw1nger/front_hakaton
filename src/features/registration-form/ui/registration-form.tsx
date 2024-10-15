"use client";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { InvisibleSmartCaptcha } from "@yandex/smart-captcha";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema, useReg } from "../model/register";

export const RegistrationForm = () => {
  const [captchaVisible, setCaptchaVisible] = useState(false);
  const [resetCaptcha, setResetCaptcha] = useState(0);
  const [sendReg, pendingReg, successReg, responseReg] = useReg();

  const regForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      smart_token: "",
    },
  });

  const isTestMode = process.env.NEXT_PUBLIC_TEST_MODE === "true";

  const onSubmitLogin = () => {
    if (isTestMode) {
      handleCaptchaSuccess("test-token");
    } else {
      setCaptchaVisible(true);
    }
  };

  const handleCaptchaSuccess = async (token: string) => {
    const formData = {
      ...regForm.getValues(),
      smart_token: token,
    };

    const success = await sendReg(formData);
  };

  const handleCaptchaHidden = useCallback(() => {
    setCaptchaVisible(false);
    setResetCaptcha((prev) => prev + 1);
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="basis-full p-1 sm:basis-3/4 md:basis-2/3 lg:basis-1/3">
        <Form {...regForm}>
          <form
            onSubmit={regForm.handleSubmit(onSubmitLogin)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={regForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder=" Ваше имя..." {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"name"}
            />
            <FormField
              control={regForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email..." {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"email"}
            />
            <FormField
              control={regForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input placeholder="Пароль..." type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <InvisibleSmartCaptcha
              key={resetCaptcha}
              sitekey={process.env.NEXT_PUBLIC_YCAPTCHA_KEY as string}
              onSuccess={handleCaptchaSuccess}
              onChallengeHidden={handleCaptchaHidden}
              visible={captchaVisible}
            />
            <Button type="submit" disabled={pendingReg}>
              Подтвердить!
            </Button>
            {!successReg && (
              <div className="rounded-xl border border-red-600 bg-red-500 px-5 py-3 text-center">
                {responseReg?.message}
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};
