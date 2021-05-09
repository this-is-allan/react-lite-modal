import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  children: any
  title?: string
  open: boolean
  onClose: () => void
}

export const Header = ({ children }: any) => (
  <div className={styles.modalHeader}>{children}</div>
)

export const Modal = ({ children, title, open, onClose }: Props) => {
  return (
    <div>
      {open && (
        <div role='dialog' className={styles.wrapper}>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className={styles.modalTitle}>{title}</h5>
                <button
                  type='button'
                  className={styles.btnClose}
                  onClick={onClose}
                />
              </div>
              <div className={styles.modalBody}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}