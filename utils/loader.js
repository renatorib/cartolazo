import React from 'react'
import { LoadingState } from '../components/atoms'

export default (condition, message, render) =>
  condition ? message && <LoadingState>{message}</LoadingState> : render()
