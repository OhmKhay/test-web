
// eslint-disable-next-line @typescript-eslint/no-explicit-any
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const cssvars = (vars: object) => {
    return Object.entries(vars).reduce((vars, [name, value]) => {
      return value !== undefined ? { ...vars, [`--${name}`]: value } : vars
    }, {})
  }