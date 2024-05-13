import axios from 'axios'
import { md5 } from 'js-md5'

const ts = new Date().getTime()
const apikey = '282fc9e1c63be8b049de452f2ad6fc6a'
const privateKey = 'ee641ac049d1265cbef540c11bbf2d1ba18e46eb'
const hash = md5.hex(ts + privateKey + apikey)

export const marvelClient = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  params: {
    ts,
    apikey,
    hash
  }
})
