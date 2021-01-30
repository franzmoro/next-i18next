import React from 'react';
import { version } from 'next-i18next/package.json'
import { useTranslation } from 'next-i18next'

export const Footer: React.FC<{}> = () => {

  const { t } = useTranslation('footer')

  return (
    <footer>
      <p>
        {t('description')}
      </p>
      <p>
        next-i18next v
        {version}
      </p>
    </footer>
  )
}