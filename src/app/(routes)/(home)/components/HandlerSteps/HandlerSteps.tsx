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
import { StepOne, StepTwo } from "@/(routes)/(home)/components";

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
                  {step >= 1 ? "Back" : ""}
                  <ArrowLeft className="w-auto h-12" />
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
              {step === 3 && <p>Step three</p>}
              {step === 4 && <p>Step four</p>}
              {step === 5 && <p>Step five</p>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
