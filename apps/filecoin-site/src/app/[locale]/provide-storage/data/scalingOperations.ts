import type { TranslationFunction } from '@/i18n/types'

import {
  CpuIcon,
  GaugeIcon,
  HandshakeIcon,
  LockKeyIcon,
} from '@phosphor-icons/react/dist/ssr'


export function getScalingOperations(t: TranslationFunction) {
  return [
    {
      title: t('scalingOperations.sealingHardware.title'),
      description: t('scalingOperations.sealingHardware.description'),
      icon: CpuIcon,
    },
    {
      title: t('scalingOperations.storagePipelines.title'),
      description: t('scalingOperations.storagePipelines.description'),
      icon: GaugeIcon,
    },
    {
      title: t('scalingOperations.distributedSealing.title'),
      description: t('scalingOperations.distributedSealing.description'),
      icon: LockKeyIcon,
    },
    {
      title: t('scalingOperations.deepSupport.title'),
      description: t('scalingOperations.deepSupport.description'),
      icon: HandshakeIcon,
    },
  ]
}
