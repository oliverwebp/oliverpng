import React, { useState, useEffect } from "react";

function SeattleTime() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeInSeattle());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeInSeattle() {
    const seattleTime = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

    return new Date(seattleTime);
  }

  return (
    <div>
      <p>{time.toLocaleTimeString('en-US', {
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  am: 'am',
  pm: 'pm'
})}</p>
    </div>
  );
}

export default SeattleTime;
