import React from 'react'
import styles from "./PublicateZone.module.css"
import PublicationBar from '../../Molecules/PublicationBar/PublicationBar'
import PublicateNicknameBar from '../../Molecules/PublicateNicknameBar/PublicateNicknameBar'
import ImgPublicate from '../../Molecules/ImgPublicate/ImgPublicate'
import PublicateButton from '../../atoms/PublicateButton/PublicateButton'
import PublicateOptionsBar from '../../Molecules/PublicateOptionsBar/PublicateOptionsBar'

function PublicateZone({customClass}) {
  return (
    <section className={`${styles.PublicateZone} ${customClass}`} >
        <div className={styles.PublicateZone__Div_PublicBar}>
            <PublicationBar/>
        </div>
        <div className={styles.PublicateZone__Div_PublicZone}>
            <PublicateNicknameBar/>
            <ImgPublicate Path="https://www.mundodeportivo.com/alfabeta/hero/2024/03/akira-toriyama-1.jpg?width=768&aspect_ratio=16:9&format=nowebp"/>
            <PublicateOptionsBar/>
        </div>
    </section>
  )
}

export default PublicateZone