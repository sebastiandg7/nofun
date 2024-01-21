import React, { Children, ReactElement, ReactNode, useEffect, useRef, useState } from "react";

// @floating-ui
import { cn } from '@nofun/tailwind-util-class-names';

export interface StepperProps extends React.ComponentProps<"div"> {
  activeStep: number;
  onFirstStep?: (arg: boolean) => void;
  onLastStep?: (arg: boolean) => void;
  className?: string;
  lineClassName?: string;
  activeLineClassName?: string;
  children: ReactNode;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      activeStep,
      onFirstStep,
      onLastStep,
      className,
      lineClassName,
      activeLineClassName,
      children,
      ...rest
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [widthPerStep, setWidthPerStep] = useState(0);
    const isFirstStepValue = activeStep === 0;
    const isLastStepValue = Array.isArray(children) && activeStep === children.length - 1;
    const isReachEnd = Array.isArray(children) && activeStep > children.length - 1;

    useEffect(() => {
      if (containerRef.current && children ) {
        const { width } = containerRef.current.getBoundingClientRect();
        const widthPerStepCalc = width / (Children.count(children) - 1);

        setWidthPerStep(widthPerStepCalc);
      }
    }, [children]);

    const width = React.useMemo(() => {
      if (!isReachEnd) {
        return widthPerStep * activeStep;
      }
    }, [activeStep, isReachEnd, widthPerStep]);

    const stepperClasses = cn('w-full relative flex items-center justify-between', className);
    const lineClasses = cn('absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-slate-900', lineClassName);
    const activeLineClasses = cn(
      lineClasses,
      'bg-slate-300 transition-all duration-500',
      activeLineClassName,
    );
    const activeStepClasses = 'bg-slate-300 text-slate-900';
    const completedStepClasses = 'bg-slate-300 text-slate-900';

    useEffect(() => {
      onLastStep && typeof onLastStep === "function" && onLastStep(isLastStepValue);
      onFirstStep && typeof onFirstStep === "function" && onFirstStep(isFirstStepValue);
    }, [onFirstStep, isFirstStepValue, onLastStep, isLastStepValue]);

    return (
      <div {...rest} ref={containerRef} className={stepperClasses}>
        <div className={lineClasses} />
        <div
          className={activeLineClasses}
          style={{
            width: `${width}px`,
          }}
        />
        {Array.isArray(children)
          ? children.map((child: ReactElement, index) => {
              return React.cloneElement(child, {
                key: index,
                ...child.props,
                className: cn(
                  child.props.className,
                  index === activeStep
                    ? cn(activeStepClasses, child.props?.activeClassName)
                    : index < activeStep
                    ? cn(completedStepClasses, child.props?.completedClassName)
                    : "",
                ),
              });
            })
          : children}
      </div>
    );
  },
);

Stepper.displayName = "Stepper";

export interface StepProps extends React.ComponentProps<"div"> {
  className?: string;
  activeClassName?: string;
  completedClassName?: string;
  children?: ReactNode;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ className, activeClassName, completedClassName, children, ...rest }, ref) => {
    const stepClasses = cn('relative z-10 grid place-items-center w-10 h-10 rounded-full bg-slate-900 text-slate-300 font-bold transition-all duration-300', className);
    return (
      <div {...rest} ref={ref} className={stepClasses}>
        {children}
      </div>
    );
  },
);

Step.displayName = "Step";
