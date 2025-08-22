// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pipe<T extends any[], R>(
  fn1: (...args: T) => R,
  ...fns: Array<(a: R) => R>
): (...args: T) => R {
  const piped = fns.reduce(
    (prevFn, nextFn) => (value: R) => nextFn(prevFn(value)),
    (value) => value
  );
  return (...args: T) => piped(fn1(...args));
}

export function compose<R>(
  fn1: (a: R) => R,
  ...fns: Array<(a: R) => R>
): (a: R) => R {
  return fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);
}
