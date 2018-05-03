import React from 'react'
import { EmptyState } from '../components/atoms'

export default (condition, message, render) =>
  condition
    ? message && <EmptyState icon="IcOps">{message}</EmptyState>
    : render()
