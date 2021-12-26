export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInAnim = (
  delayValue,
  durationValue,
  initialScaleValue = 1
) => {
  return {
    hidden: {
      opacity: 0,
      scale: initialScaleValue,
      transition: {
        duration: 0,
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: durationValue,
        delay: delayValue,
      },
    },
  };
};

export const moveUpAnim = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const moveRightAnim = {
  hidden: {
    x: "-40%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

export const moveLeftAnim = {
  hidden: {
    x: "40%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

export const scaleAnim = {
  hidden: {
    scale: 0.93,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

export const fadeInFastAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

export const moveHorizontalAnim = (xInit) => {
  return {
    hidden: {
      x: xInit,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
};

export const heroAnim = (initY) => {
  return {
    hidden: {
      y: initY,
    },
    show: {
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
};

export const heroSmallAnim = (initX) => {
  return {
    hidden: {
      x: initX,
    },
    show: {
      x: 0,
      transition: {
        duration: 0.8,
        delay: 1,
      },
    },
  };
};
