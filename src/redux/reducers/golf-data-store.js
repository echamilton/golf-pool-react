import {
  GOLFER_GROUPINGS_SUCCESS,
  GET_GOLFER_GROUPINGS,
  TOURNAMENT_DATA_SUCCESS,
  GET_TOURNAMENT_DATA,
} from "../actionTypes";

const initialState = {
  tournamentData: {},
  isLoading: false,
  golferGroupings: {},
  isLoadingGroups: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOURNAMENT_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TOURNAMENT_DATA_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
