export const getPhoneWithoutFormatting = (phone: string) => {
  return phone.replace('(', '').replace(')', '').replaceAll(' ', '')
}
