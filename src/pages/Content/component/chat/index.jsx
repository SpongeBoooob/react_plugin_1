import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import services from '@/services';
const { getAppList } = services.app;
const { getOriginList } = services.chat;

const ChatBtn = () => {

  const [bottom, setBottom] = useState('100px');
  const [showChat, setShowChat] = useState(false);
  const moving = useRef(false);
  const domHeight = useRef(0);
  const hasMove = useRef(false);


  useEffect(() => {
    getOriginList().then(res => {
    })
  }, [])

  const onDragStart = (e) => {
    console.log('onDragStart')
    moving.current = true;
    domHeight.current = e.target.clientHeight / 2;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', onDragOver);
  }

  const onDrag = (e) => {
    if (moving.current) {
      console.log('onDrag')
      hasMove.current = true;
      setBottom(`calc(100% - ${e.clientY + domHeight.current}px)`);
    }
  }

  const onDragOver = (e) => {
    if (moving.current) {
      console.log('onDragOver')
      moving.current = false;
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', onDragOver);
      if (hasMove.current) {
        hasMove.current = false;
        setShowChat(true);
      }
    }
  }

  return (
    <div className='insertDomInit'
      style={{
        bottom: bottom
      }}
      onMouseDown={onDragStart}
    >
      <img src={require('@/assets/img/icon-34.png')} alt="" />
    </div>
  )
}
export default ChatBtn;