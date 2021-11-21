import socketIOClient from 'socket.io-client';
import { BACKEND_URL } from '../../config';
import { Emotion, onEmotionReceived } from '../../state/reducers/emotionsReducer';
import { store } from '../../state/store';

const socket = socketIOClient(BACKEND_URL);

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

export default socket;
