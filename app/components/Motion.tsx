'use client';
import { useInView } from 'framer-motion'
import { createElement, HTMLAttributes, ReactHTML, useRef } from 'react'
import { cssvars } from '../utils'

type Props = HTMLAttributes<HTMLElement> & { x?: string; y?: string; as?: keyof ReactHTML; delay?: number }

export default function Motion({ x = '0', y = '1rem', as = 'div', delay = 0, style, className, children, ...rest }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return createElement(
    as,
    {
      ref,
      style: { ...cssvars({ x, y, t: '0.65s', d: `${delay}s` }), ...style },
      className: `${isInView ? 'animate-fade-in' : 'animate-fade-out'} ${className}`,
      ...rest,
    },
    children
  )
}
