import React from 'react'
import Bullet from '../Bullet'
import { BulletsSchema, LinkProps } from '../BulletTypes'

type Bullet = {
  image: string,
  titleBullet?: string,
  link?: LinkProps
}

export const getBulletsAsList = (bullets: BulletsSchema)  => (
  bullets.map((bullet: Bullet, index) => {
    return (
    <Bullet
      key={index}
      src={bullet.image}
      titleBullet={bullet.titleBullet}
      link={bullet.link ?
        bullet.link :
        {
          url: "",
          attributeNoFollow: false,
          attributeTitle: "",
          openNewTab: false,
          newTab: false
        }
      }
    />
    )
  })
)


