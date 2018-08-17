import * as types from '../constants/actionTypes';

const initialState = {
  upcoming: [
    {
      storyId: '',
      prompt: ''
    }
  ],
  stories: []
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
  case types.START_GAME_SUCCESS:
    console.log('START_GAME_SUCCESS reduced (story)');
    console.log('number of stories: ', action.gameSession.stories.length);
    return Object.assign({}, state, {
      stories: action.gameSession.stories,
      selectedStoryId: action.gameSession.stories[0].id
    });
  case types.JOIN_GAME_SUCCESS:
    console.log('JOIN_GAME_SUCCESS reduced (story)');
    console.log('action.stories: ', action.stories);
    return Object.assign({}, state, {
      stories: action.stories,
      selectedStoryId: action.stories[0] ? action.stories[0].id : null
    });
  case types.FINISH_GAME:
    console.log('FINISH_GAME reduced (story)');
    return Object.assign({}, state, {
      selectedStoryId: state.stories[0].id 
    });
  case types.SELECT_STORY:
    return Object.assign({}, state, {
      selectedStoryId: action.storyId
    });
  case types.ADD_SENTENCE_SUCCESS:
    console.log('ADD_SENTENCE_SUCCESS reduced');
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
                text: action.text,
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
  case types.ADD_SENTENCE_ERROR:
    console.log('ADD_SENTENCE_ERROR reduced');
    console.log('error: ', action.error);
    return Object.assign({}, state, {
      error: action.error
    });
  case types.NEXT_PROMPT:
    console.log('NEXT_PROMPT reduced');
    return Object.assign({}, state, {
      upcoming: [...state.upcoming.slice(1)]
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
  case types.ADD_PLAYER_NAME_TO_STORY_STATE:
    // needed in this state in order to properly handle upcoming prompts
    console.log('ADD_PLAYER_NAME_TO_STORY_STATE reduced');
    return Object.assign({}, state, {
      playerName: action.playerName
    });
  case types.ADD_INITIAL_PROMPT:
    console.log('ADD_INITIAL_PROMPT reduced');
    if (state.playerName === action.receiver) {
      return Object.assign({}, state, {
        upcoming: [{
          storyId: action.storyId,
          prompt: action.prompt
        }]
      });
    } else {
      return state;
    }
  case types.ADD_UPCOMING_PROMPT:
    console.log('ADD_UPCOMING_PROMPT reduced');
    if (state.playerName === action.receiver) {
      return Object.assign({}, state, {
        upcoming: [
          ...state.upcoming,
          {
            storyId: action.storyId,
            prompt: action.prompt
          }
        ]
      });
    } else {
      return state;
    }
  default:
    return state;
  }
};