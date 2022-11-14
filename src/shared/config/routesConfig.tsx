import { Navigate, RouteProps } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import Start from 'pages/Start/Start';
import Game from 'pages/Game/Game';
import Result from 'pages/Result/Result';

export enum AppRoutes {
  EMPTY = 'empty',
  START = 'start',
  GAME = 'game',
  RESULT = 'result',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.EMPTY]: '/',
  [AppRoutes.START]: '/start',
  [AppRoutes.GAME]: '/game',
  [AppRoutes.RESULT]: '/result',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.EMPTY]: {
    path: RoutePath.empty,
    element: <Navigate to="/start" />,
  },
  [AppRoutes.START]: {
    path: RoutePath.start,
    element: <Start/>,
  },
  [AppRoutes.GAME]: {
    path: RoutePath.game,
    element: <Game/>,
  },
  [AppRoutes.RESULT]: {
    path: RoutePath.result,
    element: <Result/>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound/>,
  },
};
