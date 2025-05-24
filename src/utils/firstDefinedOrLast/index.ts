/**
 * @description Returns the first argument that passes a boolean check, excluding the last argument.
 * @default If no valid argument is found, returns the last argument.
 * @param args Values to check.
 * @returns The first argument that passes a boolean check or the last argument if none pass.
 */
export const firstDefinedOrLast = <T, D>(...args: [...T[], D]): D => {
  const lastArg = args[args.length - 1] as D;
  return (args.slice(0, -1).find(Boolean) ?? lastArg) as D;
};
