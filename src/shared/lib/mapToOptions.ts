export const mapToOptions = <T extends readonly string[]>(arr: T) =>
  arr.map((s) => ({
    value: s,
    label: s,
  }));
