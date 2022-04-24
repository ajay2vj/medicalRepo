import React, {useState} from 'react'
import { Modal } from 'antd';

export default function ConfirmModal({
  showModal,
  setShowModal
}){
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setShowModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return(
    <>
      <Modal
        title="Title"
        visible={showModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  )
}