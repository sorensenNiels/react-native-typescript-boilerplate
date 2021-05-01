import {ActionConsts} from '@Definitions';
import {IHomePage} from '@Interfaces';
import {PlanetaryService} from '@Services';
import {Dispatch} from 'redux';

export const HomeActions = {
  Map: (payload: {}) => ({
    payload,
    type: ActionConsts.Home.SetReducer
  }),

  Reset: () => ({
    type: ActionConsts.Home.ResetReducer
  }),

  GetApod: (payload: IHomePage.Actions.IGetApodPayload) => async (
    dispatch: Dispatch
  ) => {
    const result = await PlanetaryService.GetPlanetImage({
      params: payload.params
    });

    dispatch({
      payload: {
        image: result
      },
      type: ActionConsts.Home.SetReducer
    });
  }
};
