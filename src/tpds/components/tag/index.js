import React from 'react'
import clsx from 'clsx'

const Tag = ({
  onClick,
  label = '',
  isUppercase = false,
  addHoverEffect = false,
  showCloseIcon = false,
  variant = 'default',
  ...props
}) => {
  const finalRootClass = clsx(
    props.className ? props.className : '',
    'border border-2 inline-flex rounded py-0.5 px-1.5 select-none justify-center align-center gap-1',
    addHoverEffect && 'cursor-pointer',
    addHoverEffect ? rootVariantStylesWithHover[variant] : rootVariantStyles[variant],
  )
  const finalLabelClass = clsx(
    'text-[11px] font-bold whitespace-nowrap !text-inherit',
    isUppercase && 'uppercase',
  )

  return (
    <div className={finalRootClass} onClick={onClick}>
      <p className={finalLabelClass}>{label}</p>
      {showCloseIcon && <XIcon className={finalLabelClass} />}
    </div>
  )
}

export default Tag

const defaultStyle = ['border-grey-light-scale-600 text-grey-light-scale-600']
const primaryStyle = ['border-grey-light-scale-600 text-grey-light-scale-600']
const infoStyle = ['border-blue text-blue']
const successStyle = ['border-green text-green']
const dangerStyle = ['border-red text-red']
const warningStyle = ['border-orange text-orange']

const primaryStyleWithHover = [
  `text-primary`,
  `hover:text-white hover:dark:text-black`,
  `border-grey-dark-scale-600 dark:border-grey-light-scale-300`,
  `hover:bg-grey-dark-scale-600 dark:hover:bg-grey-light-scale-300`,
]
const defaultStyleWithHover = [
  `text-grey-light-scale-600`,
  `hover:text-white hover:dark:text-black`,
  `border-grey-light-scale-600 hover:bg-grey-light-scale-600`,
]
const infoStyleWithHover = [
  `text-blue`,
  `hover:text-white hover:dark:text-black`,
  `border-blue hover:bg-blue`,
]
const successStyleWithHover = [
  `text-green`,
  `hover:text-white hover:dark:text-black`,
  `border-green hover:bg-green`,
]
const dangerStyleWithHover = [
  `text-red`,
  `hover:text-white hover:dark:text-black`,
  `border-red hover:bg`,
]
const warningStyleWithHover = [
  `text-orange`,
  `hover:text-white hover:dark:text-black`,
  `border-orange hover:bg-orange`,
]

const rootVariantStyles = {
  default: defaultStyle,
  primary: primaryStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle,
}

const rootVariantStylesWithHover = {
  default: defaultStyleWithHover,
  primary: primaryStyleWithHover,
  info: infoStyleWithHover,
  success: successStyleWithHover,
  danger: dangerStyleWithHover,
  warning: warningStyleWithHover,
}

function XIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={clsx('w-[14px] h-[16px]', className)}
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      ></path>
    </svg>
  )
}
