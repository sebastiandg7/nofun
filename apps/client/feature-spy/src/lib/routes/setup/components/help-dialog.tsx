import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icons,
  Step,
  Stepper,
} from '@nofun/ui-components';
import { AlertCircle, HelpCircle, Quote } from 'lucide-react';
import { useState } from 'react';
import { SPY_NAMESPACE } from '../../../i18n/constants';
import { useTranslation } from 'react-i18next';

export function HelpDialog() {
  const { t } = useTranslation(SPY_NAMESPACE);

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const resetState = () => {
    setOpen(false);
    setActiveStep(0);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="secondary"
          className="top-4 right-4 absolute"
        >
          <HelpCircle className="w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="mx-auto h-dvh" onInteractOutside={() => setActiveStep(0)}>
        <DialogHeader>
          <DialogTitle>{t('setup.help.title')}</DialogTitle>
        </DialogHeader>
        <Stepper
          activeStep={activeStep}
          onLastStep={(value) => setIsLastStep(value)}
          onFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
          <Step onClick={() => setActiveStep(3)}>4</Step>
        </Stepper>
        <div className="p-2">
          {activeStep === 0 ? (
            <div className="flex items-center flex-col">
              <Icons.Spy className="h-16 w-16" />
              <p className="mt-5 text-justify">
                {t('setup.help.step1')}
              </p>
            </div>
          ) : null}
          {activeStep === 1 ? (
            <div className="flex items-center flex-col">
              <Quote className="h-16 w-16" />
              <p className="mt-5 text-justify">
                {t('setup.help.step2')}
              </p>
            </div>
          ) : null}
          {activeStep === 2 ? (
            <div className="flex items-center flex-col">
              <AlertCircle className='h-16 w-16' />
              <p className="mt-5 text-justify">
                {t('setup.help.step3')}
              </p>
            </div>
          ) : null}
          {activeStep === 3 ? (
            <div className="flex items-center flex-col">
              <Icons.Spy className="h-16 w-16" />
              <p className="mt-5 text-justify">
                {t('setup.help.step4')}
              </p>
            </div>
          ) : null}
        </div>
        <div className="mt-16 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            {t('setup.help.button.prev')}
          </Button>
          <Button onClick={!isLastStep ? handleNext : resetState}>
            {!isLastStep ? t('setup.help.button.next') : t('setup.help.button.close')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
