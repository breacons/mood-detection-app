import socketIOClient from 'socket.io-client';

import { BACKEND_URL } from '../../config';
import { Emotion, onEmotionReceived } from '../../state/reducers/emotionsReducer';
import { onMessageReceived } from '../../state/reducers/messagesReducer';
import { navigateToRoute } from '../../state/reducers/uiReducer';
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

socket.on('connect', () => console.log(`Socket Connected on ${BACKEND_URL}`));
socket.on(TYPE_DETECTED_EMOTION, (message: DetectedEmotionPayload[]) => {
  if (message && message.length > 0 && message[0]) {
    const emotion = message[0].emotions;
    store.dispatch(onEmotionReceived(emotion));
  }
});

socket.on(ChatMessageReceivedType, ([message]: ChatMessageReceived[]) => {
  if (message) {
    store.dispatch(onMessageReceived(message.payload));
  }
});

socket.on(ChatDisabledType, ([message]: ChatDisabled[]) => {
  if (message) {
    store.dispatch(navigateToRoute(`/chat/break/?next=${message.payload.breakMode}`));
  }
});

export default socket;
