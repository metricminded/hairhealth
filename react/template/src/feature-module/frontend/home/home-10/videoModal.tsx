// VideoModal.tsx
import React from 'react';
import { Modal } from 'react-bootstrap';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

type VideoModalProps = {
  show: boolean;
  handleClose: () => void;
  videoUrl: string;
};

const VideoModal: React.FC<VideoModalProps> = ({ show, handleClose, videoUrl }) => {
  return (
    <Modal className="video-modal" show={show} centered size="xl" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Video Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ height: '80vh' }}>
          <Plyr
            source={{
              type: 'video',
              sources: [
                {
                  src: videoUrl,
                  provider: videoUrl.includes('youtube') ? 'youtube' : 'html5',
                },
              ],
            }}
            options={{
              autoplay: true,
            }}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
