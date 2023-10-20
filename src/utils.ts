const alreadyAnimated: Record<string, Animation> = {};

export const anim = (
  id: string,
  animation: Keyframe[] | PropertyIndexedKeyframes | null,
  options?: number | KeyframeAnimationOptions | undefined
) => {
  const exists = alreadyAnimated[id];

  if (exists) {
    return exists;
  }

  const element = document.getElementById(id);
  if (element) {
    const anima = element.animate(animation, options);
    alreadyAnimated[id] = anima;
    return anima;
  }
};

const orders = [0, 0.5, 0.7, 0.9, 1.5, 2];
export const fadeIn = (id: string, order: number = 0) => {
  return anim(
    id,
    { opacity: [0, 1] },
    {
      delay: orders[order] * 1000,
      duration: 450,
      fill: 'both',
      easing: 'ease-in-out',
    }
  );
};

export const slideIn = (id: string, order: number = 0) => {
  anim(
    id,
    {
      transform: ['translateX(-100%)', 'translateX(0%)'],
      opacity: [0, 1],
      easing: 'ease-in-out',
    },
    {
      delay: orders[order] * 1000,
      duration: 450,
      fill: 'forwards',
    }
  );

  const res = {
    slideIn: (id: string | string[]) => {
      Array.isArray(id) ? id.forEach((id) => slideIn(id, order + 1)) : slideIn(id, order + 1);
      return res;
    },
    fadeIn: (id: string | string[]) => {
      Array.isArray(id) ? id.forEach((id) =>  fadeIn(id, order + 1)) : fadeIn(id, order + 1);
      return res;
    },
  };

    return res;
};
