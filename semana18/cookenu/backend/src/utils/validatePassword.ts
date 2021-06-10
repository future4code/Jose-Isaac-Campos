export const validatePassword = (password: string = ''): boolean => {
  const FORMAT_PASSWORD_VALID = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/

  return password.match(FORMAT_PASSWORD_VALID) ? true : false

}