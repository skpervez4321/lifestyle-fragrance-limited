import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-12-31T23:59:59');

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - new Date().getTime();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

function OfferBanner() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 60000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  return (
    <div className="bg-gradient-to-r from-pink-600 to-violet-600 text-white text-center py-3 px-4 text-sm font-medium">
      🎉 Eid Special — Offer ends in {time.days}d {time.hours}h {time.minutes}m
    </div>
  );
}

export default OfferBanner;