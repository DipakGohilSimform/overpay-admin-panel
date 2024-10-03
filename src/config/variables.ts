interface ColorValues {
  white: string
  black: string
  portage: string
  'balance-text': string
  'portage-bg': string
  'orange-bg': string
  green: string
  'green-bg': string
  orange: string
  yellow: string
  blue: string
  pink: string
  alert: string
  'alert-bg': string
  error: string
  'error-bg': string
  'primary-50': string
  'primary-100': string
  'primary-200': string
  'primary-300': string
  'primary-400': string
  'primary-500': string
  'primary-600': string
  'primary-700': string
  'primary-800': string
  'primary-900': string
  'primary-950': string
  'neutral-0': string
  'neutral-50': string
  'neutral-100': string
  'neutral-150': string
  'neutral-250': string
  'neutral-200': string
  'neutral-300': string
  'neutral-400': string
  'neutral-500': string
  'neutral-600': string
  'neutral-700': string
  'neutral-800': string
  'neutral-900': string
  'neutral-1000': string
}

export const themes: Record<'default' | 'dark', ColorValues> = {
  default: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    'balance-text': '0, 0, 0',
    portage: '147, 109, 255',
    'portage-bg': '247, 245, 255',
    orange: '255, 120, 75',
    'orange-bg': '255,247,245',
    green: '34, 197, 94',
    'green-bg': '246, 253, 249',
    yellow: '255 179 102',
    blue: '232, 237, 255',
    pink: '255, 236, 229',
    alert: '250, 204, 21',
    'alert-bg': '255, 252, 240',
    error: '255, 71, 71',
    'error-bg': '255, 245, 245',
    'primary-50': '255, 240, 240',
    'primary-100': '0, 60, 190',
    'primary-200': '252, 207, 210',
    'primary-300': '250, 168, 174',
    'primary-400': '246, 116, 129',
    'primary-500': '25, 75, 251',
    'primary-600': '219, 36, 66',
    'primary-700': '185, 24, 56',
    'primary-800': '155, 23, 54',
    'primary-900': '130, 23, 52',
    'primary-950': '75, 7, 23',
    'neutral-0': '255, 255, 255',
    'neutral-50': '250, 250, 250',
    'neutral-100': '242, 246, 255',
    'neutral-150': '247, 250, 252',
    'neutral-200': '237, 242, 247',
    'neutral-250': '240,240,240',
    'neutral-300': '226, 232, 240',
    'neutral-400': '203, 213, 224',
    'neutral-500': '160, 174, 192',
    'neutral-600': '113, 128, 150',
    'neutral-700': '51, 65, 85',
    'neutral-800': '30, 41, 59',
    'neutral-900': '26, 32, 44',
    'neutral-1000': '0, 0, 0'
  },
  dark: {
    white: '255, 255, 255',
    black: '0, 0, 0',
    'balance-text': '250, 250, 250',
    portage: '147, 109, 255',
    'portage-bg': '147, 109, 255, 0.1',
    orange: '255, 120, 75',
    'orange-bg': '255, 120, 75, 0.1',
    green: '34, 197, 94',
    'green-bg': '34, 197, 94, 0.1',
    yellow: '255, 179, 102',
    alert: '250, 204, 21',
    'alert-bg': '255, 252, 240',
    error: '255, 71, 71',
    'error-bg': '255, 71, 71, 0.1',
    'primary-50': '75, 7, 23',
    'primary-100': '0, 60, 190',
    'primary-200': '155, 23, 54',
    'primary-300': '185, 24, 56',
    'primary-400': '219, 36, 66',
    'primary-500': '25, 75, 251',
    'primary-600': '246, 116, 129',
    'primary-700': '250, 168, 174',
    'primary-800': '252, 207, 210',
    'primary-900': '254, 230, 231',
    'primary-950': '255, 240, 240',
    'neutral-0': '0, 0, 0',
    'neutral-50': '26, 32, 44',
    'neutral-100': '35, 43, 56',
    'neutral-150': '35, 43, 56',
    'neutral-200': '26, 32, 44',
    'neutral-250': '240,240,240',
    'neutral-300': '42, 49, 60',
    'neutral-400': '71, 85, 105',
    'neutral-500': '100, 116, 139',
    'neutral-600': '148, 163, 184',
    'neutral-700': '203, 213, 225',
    'neutral-800': '226, 232, 240',
    'neutral-900': '250, 250, 250',
    'neutral-1000': '255, 255, 255',
    blue: '232, 237, 255',
    pink: '255, 236, 229'
  }
}

export const breakpoints = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
}

export const breakpointsDown = {
  xs: '(max-width: 479px)',
  sm: '(max-width: 575px)',
  md: '(max-width: 767px)',
  lg: '(max-width: 991px)',
  xl: '(max-width: 1199px)',
  xxl: '(max-width: 1599px)'
}
