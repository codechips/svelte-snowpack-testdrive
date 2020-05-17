import { readable } from 'svelte/store';

const timer = readable(0, set => {
  let current: number = 0;

  const id = setInterval(() => {
    current += 1;
    set(current);
  }, 1000);

  return () => clearInterval(id);
});

export { timer };
