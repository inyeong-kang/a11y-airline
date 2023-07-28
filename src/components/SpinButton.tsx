import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
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
          aria-label={`성인 ${count} 텍스트 숫자만 수정`}
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
