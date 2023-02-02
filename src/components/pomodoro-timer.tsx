import React, { useState } from 'react';
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

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="teste"></Button>
        <Button text="teste"></Button>
        <Button text="teste"></Button>
      </div>
      <div className="details">
        <p>TESTANDO</p>
      </div>
    </div>
  );
}
