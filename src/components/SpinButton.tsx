import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    announceMessage(`성인 탑승 ${count + 1}명 추가`);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  const announceMessage = (message: string) => {
    const screenReaderElement = document.createElement('div');
    screenReaderElement.setAttribute('aria-live', 'assertive');
    screenReaderElement.setAttribute('aria-atomic', 'true');
    screenReaderElement.innerText = message;
    document.body.appendChild(screenReaderElement);

    // 스크린 리더가 메시지를 읽은 후 해당 엘리먼트를 제거하여 화면에 보이지 않도록 함
    setTimeout(function () {
      document.body.removeChild(screenReaderElement);
    }, 1000);
  };

  return (
    <section className='spinButtonContainer'>
      <div>
        <h1>승객 선택</h1>
        <div className='spinButtonLabel'>
          <label>성인</label>
          <div
            className='helpIcon'
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className='tooltip'>최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          aria-label='성인 탑승자 한명 줄이기'
          aria-disabled={count === 0 ? 'true' : 'false'}
          onClick={decrement}
          className='spinButton'
        >
          -
        </button>
        <input
          aria-label={`성인 ${count === 1} 텍스트 숫자만 수정`}
          type='text'
          role='spinbutton'
          readOnly
          className='spinButtonInput'
          value={count}
        />
        <button
          aria-label='성인 탑승자 한명 늘리기'
          aria-disabled={count === 3 ? 'true' : 'false'}
          onClick={increment}
          className='spinButton'
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
