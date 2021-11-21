type MessagePayload = {
  sender: string;
  sentAt: string;
};

export type SendChatMessagePayload = MessagePayload & {
  authorId: string;
  message: string;
};

export type ChatMessageReceivedPayload = MessagePayload & {
  authorId: string;
  message: string;
  rejected?: boolean;
  rejectReason?: string;
};

export type StatisticsUpdatePayload = MessagePayload & {
  playerName: string;
  playerLevel: string;
  playerRating: string;
  rejectedMessageCount: number;
  moodBelowTresholdCount: number;
};

export type Mood = 'happy' | 'sad' | 'angry' | 'frustrated';
export type MoodDetectedPayload = MessagePayload & {
  mood: Mood;
};

export type ChatEnabledPayload = MessagePayload & {
  // Anything?
};

export type ChatDisabledPayload = MessagePayload & {
  disabledReason: string;
  details: string;
  breakMode: 'youtube' | 'rage' | 'meditate';
};

export const ChatMessageReceivedType = 'CHAT_MESSAGE_RECEIVED';
export type ChatMessageReceived = {
  type: typeof ChatMessageReceivedType;
  payload: ChatMessageReceivedPayload;
};

export const ChatDisabledType = 'CHAT_DISABLED';
export type ChatDisabled = {
  type: typeof ChatDisabledType;
  payload: ChatDisabledPayload;
};

export type SocketMessage =
  | {
      type: 'SEND_CHAT_MESSAGE';
      payload: SendChatMessagePayload;
    }
  | ChatMessageReceived
  | {
      type: 'STATISTICS_UPDATE';
      payload: StatisticsUpdatePayload;
    }
  | {
      type: 'MOOD_DETECTED';
      payload: MoodDetectedPayload;
    }
  | {
      type: 'CHAT_ENABLED';
      payload: ChatEnabledPayload;
    }
  | ChatDisabled;

function onMessageReceived(message: SocketMessage) {
  switch (message.type) {
    case 'SEND_CHAT_MESSAGE':
      console.log(message.payload.message);
      break;

    default:
      break;
  }
}
