import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: {
    package: {
      description: string;
      name: string;
      version: string;
      links: {
        bugs: string;
        homepage: string;
        repository: string;
        npm: string;
      };
    };
    score: {
      detail: { maintenance: number; popularity: number; quality: number };
      final: number;
    };
  }[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
