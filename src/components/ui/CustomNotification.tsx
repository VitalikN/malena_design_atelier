'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface NotificationProps {
  duration?: number;
  onHide?: () => void;
}

const Notification = ({ duration = 5000, onHide }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations('CustomNotification');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onHide) onHide();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onHide]);

  return (
    <div
      className={`notification ${!isVisible ? 'fade-out' : ''}  bg-navBg opacity-90 text-gradientFrom p-2 rounded-[10px]`}
    >
      <span>{t('successMessage')}</span>
    </div>
  );
};

export default Notification;
