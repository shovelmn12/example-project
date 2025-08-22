/**
 * Pipes the output of one function to the input of another.
 * @param fn1 The first function.
 * @param fns The rest of the functions.
 * @returns A new function that pipes the output of `fn1` to the input of the next function, and so on.
 * @template T The type of the arguments of the first function.
 * @template R The type of the return value of the functions.
 */
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

<<<<<<< HEAD
export function compose<R>(
  fn1: (a: R) => R,
  ...fns: Array<(a: R) => R>
): (a: R) => R {
  return fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);
}
=======
/**
 * Composes functions from right to left.
 * @param fn1 The first function.
 * @param fns The rest of the functions.
 * @returns A new function that composes the functions from right to left.
 * @template R The type of the return value of the functions.
 */
export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);
>>>>>>> main
