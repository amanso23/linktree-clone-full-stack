import { Button } from "@/components/ui/button";
import { HandlerStepsProps } from "./types";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useStepConfig } from "@/hooks/useStepConfig";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import {
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
} from "@/(routes)/(home)/components";

export function HandlerSteps({ onReload }: HandlerStepsProps) {
  const [openDialog, setOpenDialog] = useState(true);
  const { step, totalSteps, prevStep } = useStepConfig();

  const progressValue = (step * 100) / totalSteps;

  const onCloseDialog = () => {
    onReload(true);
    setOpenDialog(false);
  };

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="space-y-4">
            <div className="flex justify-between mb-3">
              {step > 1 && (
                <Button variant={"outline"} onClick={prevStep}>
                  <ArrowLeft className="w-auto h-12" />
                  {step >= 1 ? "Back" : ""}
                </Button>
              )}
            </div>
            <p className="text-center text-xl font-medium  text-black">
              {step <= 5 && `${step} of ${totalSteps} steps`}
            </p>
            <Progress value={progressValue} />
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
              {step === 4 && <StepFour />}
              {step === 5 && <p>Step five</p>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
