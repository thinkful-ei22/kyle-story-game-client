import * as types from '../constants/actionTypes';

const initialState = {
  /**
   * Really just needs to be:
   * upcoming: [
   *   {
   *     storyId: <storyId>,
   *     prompt: <lastSentenceOfStoryId.text>
   *   },
   *   {
   *     storyId: <nextStoryId>,
   *     prompt: <lastSentenceOfNextStoryId.text>
   *   }
   * ]
   */
  currentStory: [{
    id: '000000000000000000000001',
    creator: 'nameOfPlayer1',
    sentences: [
      {
        '_id': '111111111111111111110001',
        'author': 'nameOfPlayer1',
        'text': 'This is the first sentence of story 1.'
      },
      {
        '_id': '111111111111111111110003',
        'author': 'nameOfPlayer2',
        'text': 'This is the second sentence of story 1.'
      }
    ]
  }]
};

export const storyReducer = (state = initialState, action) => {
  switch(action.type) {
  case types.ADD_STORIES:
    console.log('ADD_STORIES reduced');
    return Object.assign({}, state, {
      stories: action.stories
    });
  case types.CREATE_GAME_SUCCESS:
    console.log('CREATE_GAME_SUCCESS reduced (story)');
    return Object.assign({}, state, {
      upcoming: [],
      stories: action.stories
    });
  case types.ADD_SENTENCE:
    console.log('ADD_SENTENCE reduced');
    return Object.assign({}, state, {
      stories: state.stories.map(story => {
        // console.log(story.id, action.storyId);
        if (story.id === action.storyId) {
          return ({
            id: story.id,
            creator: story.creator,
            sentences: [
              ...story.sentences,
              {
                sentence: action.sentence,
                author: action.author,
                id: action.id
              }
            ]
          });
        } else {
          return story;
        }
      })
    });
  case types.NEXT_PROMPT:
    console.log('NEXT_PROMPT reduced');
    return Object.assign({}, state, {
      currentStory: [...state.currentStory.slice(1)]
      // Object.assign(
      //   {},
      //   state.stories.find(story => {
      //     const incomingStoryIndex = state.stories.findIndex(story => story.id === action.storyId);
      //     const nextStoryIndex = state.stories[incomingStoryIndex + 1] ? incomingStoryIndex + 1 : 0;
      //     // console.log('incoming: ', incomingStoryIndex, 'next: ', nextStoryIndex);
      //     return story === state.stories[nextStoryIndex];
      //   })
      // )
    });
  default:
    return state;
  }
};