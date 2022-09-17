import KiwiIntl from 'kiwi-intl'
// local i18n
import zh from './kiwi/zh-CN/index.ts'
import en from './kiwi/en-US/index.ts'
import es from './kiwi/es-ES/index.ts'
import ar from './kiwi/ar/index.ts'

const messages = {
  'en-US': { ...en },
  'zh-CN': { ...zh },
  'es-ES': { ...es },
  ar: { ...ar }
}

export const kiwiIntl = KiwiIntl.init('zh-CN', messages)
export default kiwiIntl
