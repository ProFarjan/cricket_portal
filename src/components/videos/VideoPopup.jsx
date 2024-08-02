// components/VideoPopup.js

import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import styles from '../../styles/VideoPopup.module.css';

Modal.setAppElement('#__next');

const VideoPopup = ({ isOpen, onClose, videoUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
      <ReactPlayer url={videoUrl} controls  />
    </Modal>
  );
};

export default VideoPopup;
