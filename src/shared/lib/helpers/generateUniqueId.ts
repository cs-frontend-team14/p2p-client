// @ts-ignore
import { v4 } from 'uuid'

export const generateUniqueID = (prefix: string): string => {
  const id = v4()
  const trimmedUID = id.substring(id.lastIndexOf('-') + 1)
  return [prefix.toLocaleLowerCase(), trimmedUID].join('-')
}