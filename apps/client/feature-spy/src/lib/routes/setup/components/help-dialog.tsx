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
import { HelpCircle, Quote } from 'lucide-react';
import { useState } from 'react';

export function HelpDialog() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="secondary"
          className="top-4 right-4 absolute"
        >
          <HelpCircle className="w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="mx-auto">
        <DialogHeader>
          <DialogTitle>Como jugar?</DialogTitle>
        </DialogHeader>
        <Stepper
          activeStep={activeStep}
          onLastStep={(value) => setIsLastStep(value)}
          onFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          {/* <Step onClick={() => setActiveStep(2)}>3</Step> */}
        </Stepper>
        <div className="p-2">
          {activeStep === 0 ? (
            <div className="flex items-center flex-col">
              <Icons.Spy className="h-16 w-16" />
              <p className="mt-5 text-justify">
                Bienvenidos a Espía! En esta experiencia única, todos
                compartirán una palabra, pero hay un impostor entre ustedes. El
                impostor no sabe cuál es la palabra, pero debe disimular y
                descubrir la verdad a través de las pistas que los demás revelan
                al referirse a ella. ¿Podrán los jugadores astutos identificar
                al impostor antes de que sea demasiado tarde? ¡Prepárense para
                una aventura de palabras y engaños!
              </p>
            </div>
          ) : null}
          {activeStep === 1 ? (
            <div className="flex items-center flex-col">
              <Quote className="h-16 w-16" />
              <p className="mt-5 text-justify">
                Presiona la tarjeta con el{' '}
                <HelpCircle className="inline-block" /> para revelar si eres de
                los buenos o un espía. Si te aparece una palabra, leela,
                memorízala (que no se te olvide!), vuelve a presionar la tarjeta
                y pasale el telefono al siguiente jugador y así hasta que cada
                uno sepa su rol.
              </p>
            </div>
          ) : null}
          {/* {activeStep === 2 ? <div>Paso 3</div> : null} */}
        </div>
        <div className="mt-16 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
