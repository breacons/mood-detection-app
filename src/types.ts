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
  rejected: boolean;
  rejectReason: string;
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
};

export type SocketMessage =
  | {
      type: 'SEND_CHAT_MESSAGE';
      payload: SendChatMessagePayload;
    }
  | {
      type: 'CHAT_MESSAGE_RECEIVED';
      payload: ChatMessageReceivedPayload;
    }
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
  | {
      type: 'CHAT_DISABLED';
      payload: ChatDisabledPayload;
    };

function onMessageReceived(message: SocketMessage) {
  switch (message.type) {
    case 'SEND_CHAT_MESSAGE':
      console.log(message.payload.message);
      break;

    default:
      break;
  }
}
