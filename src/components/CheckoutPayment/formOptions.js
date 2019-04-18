// Generates options for mont and year expiry selects

export function months() {
  return [...Array(12)].map((_, x) => ++x);
}

export function nextYearsFromDate(startDate, yearsAmount = 20) {
  const startYear = Number(new Date(startDate).getFullYear());

  return [...Array(yearsAmount + 1)].map((_, x) => x + startYear);
}

export function selectOptions(values, defaultOption = []) {
  return defaultOption.concat(
    values.map(value => {
      return {
        label: value,
        value
      };
    })
  );
}

export function monthsOptions() {
  const defaultOption = [{ label: 'MM', value: 'MM', disabled: true }];
  const rawMonths = months();

  return selectOptions(rawMonths, defaultOption);
}

export function yearsOptions(startDate, yearsAmount) {
  const defaultOption = [{ label: 'YY', value: 'YY', disabled: true }];
  const rawYears = nextYearsFromDate(startDate, yearsAmount);

  return selectOptions(rawYears, defaultOption);
}