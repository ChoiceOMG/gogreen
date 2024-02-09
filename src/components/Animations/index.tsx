'use client';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
type PageWrapperProps = {
  children?: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
};
// Fades in the component when it's in view.

export const FadeInComponent = ({
  children,
  delay,
  once = true // change default value to true
}: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: delay || 0.5 }}
      viewport={{ once: once, amount: 'some' }}
    >
      {children}
    </motion.div>
  );
};
// Slides the component from the left into its original position when in view.

export const SlideFromLeftComponent = ({
  children,
  className,
  once
}: PageWrapperProps) => (
  <motion.div
    whileInView={{ x: [-100, 0] }}
    transition={{ duration: 0.5 }}
    viewport={{ once: once || false, amount: 'some' }}
    className={className}
  >
    {children}
  </motion.div>
);
// Slides the component from the right into its original position when in view.

export const SlideFromRightComponent = ({
  children,
  className,
  once
}: PageWrapperProps) => (
  <motion.div
    whileInView={{ x: [100, 0] }}
    transition={{ duration: 0.5 }}
    viewport={{ once: once || false, amount: 'some' }}
    className={className}
  >
    {children}
  </motion.div>
);
// Slides the component from the bottom into its original position when in view.

export const SlideFromBottomComponent = ({
  children,
  delay,
  className,
  once = true // change default value to true
}: PageWrapperProps) => (
  <motion.div
    whileInView={{ y: [100, 0] }}
    viewport={{ once: once || false, amount: 'some' }}
    transition={{ duration: delay || 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);
// Slides the component from the top into its original position when in view.

export const SlideFromTopComponent = ({ children }: PageWrapperProps) => (
  <motion.div
    whileInView={{ y: [-100, 0] }}
    viewport={{ once: false, amount: 'some' }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Scales up the component when it's in view.

export const ScaleUpComponent = ({ children }: PageWrapperProps) => (
  <motion.div
    initial={{ scale: 0.5 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
// Rotates the component 360 degrees when it's in view.

export const RotateComponent = ({ children }: PageWrapperProps) => (
  <motion.div
    initial={{ rotate: 0 }}
    whileInView={{ rotate: 360 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
// Makes the component pulse (scale up and down) when in view.

export const PulseComponent = ({ children }: PageWrapperProps) => {
  const pulseAnimation = {
    scale: [0.9, 1, 0.9]
  };

  const spanAnimation = { opacity: [0, 1, 0], scale: [1, 1.2, 1] };

  return (
    <motion.div
      whileInView={pulseAnimation}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2.5
      }}
      whileHover={{
        scale: 1.02
      }}
      className="w-fit"
    >
      <div className="relative z-[1]">{children}</div>

      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={spanAnimation}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2.5
        }}
        className="absolute rounded-full border-[3px] border-green w-full h-full top-0 left-0"
      ></motion.span>
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={spanAnimation}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3.5
        }}
        className="absolute rounded-full border-[1px] border-green w-full h-full top-0 left-0"
      ></motion.span>
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={spanAnimation}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 1.4
        }}
        className="absolute rounded-full border-[2px] border-green w-full h-full top-0 left-0"
      ></motion.span>
    </motion.div>
  );
};
// Makes the component shake (move left and right) when in view.
export const ShakeComponent = ({ children }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: [0, -10, 10, -10, 10, 0] }}
      transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 2.5 }}
      whileHover={{ x: 0, transition: { repeat: 0 } }}
      className="w-fit"
    >
      {children}
    </motion.div>
  );
};

// Rotates and scales up the component when it's in view.

export const RotateAndRightSlideComponent = ({
  children,
  className
}: PageWrapperProps) => (
  <motion.div
    initial={{ rotate: 0, x: 100, y: 100, scale: 1.5 }}
    whileInView={{ rotate: 360, x: 0, y: 0, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);
// Fades the component from a transparent state to full opacity when in view.

export const FadeFromTransparentComponent = ({
  children
}: PageWrapperProps) => (
  <motion.div
    initial={{ opacity: 0.2 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
// Changes the background color of the component when in view.

export const BackgroundColorSlideComponent = ({
  children
}: PageWrapperProps) => (
  <motion.div
    initial={{ backgroundColor: '#FFD700' }}
    whileInView={{ backgroundColor: '#FF6347' }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Squeezes (compresses vertically) the component when in view.

export const SqueezeComponent = ({ children }: PageWrapperProps) => (
  <motion.div
    initial={{ scaleY: 1 }}
    whileInView={{ scaleY: 0.8 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Bubble pop appearance animation
interface BubblePopComponentProps extends PageWrapperProps {
  stiffness?: number;
  damping?: number;
  initialScale?: number;
  type?: 'spring' | 'tween' | 'keyframes' | 'inertia' | 'just';
}

export const BubblePopComponent = ({
  children,
  className,
  once,
  delay,
  stiffness = 260,
  damping = 20,
  initialScale = 0,
  type = 'spring'
}: BubblePopComponentProps) => (
  <motion.div
    initial={{ scale: initialScale }}
    whileInView={{ scale: 1 }}
    viewport={{ once: once || false }}
    transition={{
      type: type,
      stiffness: stiffness,
      damping: damping,
      duration: delay || 0.5
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScrollExpandLine = ({
  className = '',
  once,
  delay
}: PageWrapperProps) => {
  return (
    <InView triggerOnce={once} threshold={0.7}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ height: 5 }}
          animate={inView ? { height: '100%' } : { height: 5 }}
          transition={{ duration: delay || 1 }}
          className={
            `h-full absolute w-[4px] bg-goGreen-green top-0 left-0 ` + className
          }
        />
      )}
    </InView>
  );
};
