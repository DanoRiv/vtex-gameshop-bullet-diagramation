import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { getBulletsAsList } from './modules/bulletsAsList'
import { useCssHandles } from 'vtex.css-handles'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {

  const CSS_HANDLES = [
    "bullet__container"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const { list } = useListContext() || []
  const { isMobile } = useDevice()


  const bulletsGroup = getBulletsAsList(bullets);
  const newListContextValue = list.concat(bulletsGroup)

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile ?
          <div className={handles.bullet__container}>
            {bulletsGroup}
          </div>
          :
          children
      }
    </ListContextProvider>
  )
}
export default BulletGroup
