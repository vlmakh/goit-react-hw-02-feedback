import { Text } from './Notification.styled';
import { FC } from 'react';

type NotifType = {
  message: string;
};

export const Notification: FC<NotifType> = ({ message }) => {
  return <Text>{message}</Text>;
};
