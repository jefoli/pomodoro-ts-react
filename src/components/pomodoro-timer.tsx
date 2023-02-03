import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/user-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  PomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.PomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configWork()}></Button>
        <Button text="teste"></Button>
        <Button
          text={timeCounting ? 'Pause' : 'Retornar'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>
      <div className="details">
        <p>TESTANDO</p>
      </div>
    </div>
  );
}
