import React, {useState} from 'react'
import { Modal } from 'antd';

export default function ConfirmModal({
  showModal,
  setShowModal
}){
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, ] = useState('Are u sure want to edit!!');

  const handleOk = () => {
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
        title="Confirmation Modal"
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