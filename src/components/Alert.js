import React from 'react'
import styles from "./Alert.css";

const Alert = ({ handleOK, handleCancel, alertVis }) => {
    return (
        <>
            <div className="modal" style={{ display: alertVis ? "block" : "none" }}>
                <div className={styles.darkBG} onClick={handleCancel} />
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.heading}>Dialog</h5>
                        </div>
                        <div className={styles.modalContent}>
                            Are you sure you want to delete this?
                        </div>
                        <div className={styles.modalActions}>
                            <div className={styles.actionsContainer}>
                                <button className={styles.deleteBtn} onClick={handleOK}>
                                    Delete
                                </button>
                                <button
                                    className={styles.cancelBtn}
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alert;
