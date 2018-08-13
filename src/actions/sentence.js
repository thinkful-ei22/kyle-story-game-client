import * as types from '../constants/actionTypes';

export const serverHello = () => ({
  type: types.SERVER_HELLO,
  data: 'Hello from the Client!'
});

export const nextPrompt = () => {
  console.log('nextPrompt ran');
  return {
    type: types.NEXT_PROMPT,
  };
};

export const serverAddSentence = (values) => {
  console.log('serverAddSentence ran');
  return {
    type: types.SERVER_ADD_SENTENCE,
    roomCode: values.roomCode,
    text: values.sentence,
    author: values.author,
    storyId: values.storyId
  };
};
