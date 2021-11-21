import socketIOClient from 'socket.io-client';

import { BACKEND_URL } from '../../config';
import { Emotion, onEmotionReceived } from '../../state/reducers/emotionsReducer';
import { onMessageReceived } from '../../state/reducers/messagesReducer';
import { navigateToRoute, setBlocked, setConnected } from '../../state/reducers/uiReducer';
import { store } from '../../state/store';
import {
  ChatDisabled,
  ChatDisabledType,
  ChatMessageReceived,
  ChatMessageReceivedType,
} from '../../types';

export const socket = socketIOClient(BACKEND_URL);

export const TYPE_DETECTED_EMOTION = 'TYPE_DETECTED_EMOTION';

interface DetectedEmotionPayload {
  box: number[];
  emotions: Emotion;
}

socket.on('connect', () => {
  store.dispatch(setConnected(true));
  console.log(`Socket Connected on ${BACKEND_URL}`);
});
socket.on('disconnect', () => {
  store.dispatch(setConnected(false));
  console.log('Disconnected');
});

socket.on(TYPE_DETECTED_EMOTION, (message: DetectedEmotionPayload[]) => {
  if (message && message.length > 0 && message[0]) {
    const emotion = message[0].emotions;
    store.dispatch(onEmotionReceived(emotion));
  }
});

socket.on(ChatMessageReceivedType, (message: ChatMessageReceived) => {
  console.log('ChatMessageReceivedType', message);
  if (message) {
    store.dispatch(onMessageReceived(message.payload));
  }
});

socket.on(ChatDisabledType, (message: ChatDisabled) => {
  if (message) {
    store.dispatch(setBlocked(true));
    store.dispatch(navigateToRoute(`/chat/break/?next=${message.payload.breakMode}`));
  }
});

export default socket;
