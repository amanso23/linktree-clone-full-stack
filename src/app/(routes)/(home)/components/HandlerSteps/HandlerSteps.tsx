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
import { ArrowLeft, ArrowRight } from "lucide-react";

export function HandlerSteps({ onReload }: HandlerStepsProps) {
  const [openDialog, setOpenDialog] = useState(true);
  const { setStep, step, totalSteps, nextStep, prevStep } = useStepConfig();

  console.log(step);

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
              {step >= 1 && (
                <Button variant={"outline"} onClick={prevStep}>
                  {step >= 1 ? "Back" : ""}{" "}
                  <ArrowLeft className="w-auto h-12" />
                </Button>
              )}

              <Button
                variant={"outline"}
                onClick={() => {
                  if (step >= 5) {
                    onCloseDialog();
                  }
                  nextStep();
                }}
                className="justify-self-end"
              >
                {step >= 5 ? "Finish" : "Continue"}{" "}
                <ArrowRight className="w-auto h-12" />
              </Button>
            </div>
            <p className="text-center text-xl font-medium  text-black">
              {step <= 5 && `${step} of ${totalSteps} steps`}
            </p>
            <Progress value={progressValue} />
          </AlertDialogTitle>
          <AlertDialogDescription>
            {step === 1 && <span>Step one</span>}
            {step === 2 && <span>Step two</span>}
            {step === 3 && <span>Step three</span>}
            {step === 4 && <span>Step four</span>}
            {step === 5 && <span>Step five</span>}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
