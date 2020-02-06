import { Map } from 'immutable'
import { injectable } from 'inversify'
import { Action, Reducer } from 'redux'
import { SagaIterator } from 'redux-saga'
import { put } from 'redux-saga/effects'

import Coordinates from '~/domain/vo/Coordinates'
import { takeEvery } from '~/lib/boni/redux-saga/effects'

//
//             _|                  _|
//   _|_|_|  _|_|_|_|    _|_|_|  _|_|_|_|    _|_|
// _|_|        _|      _|    _|    _|      _|_|_|_|
//     _|_|    _|      _|    _|    _|      _|
// _|_|_|        _|_|    _|_|_|      _|_|    _|_|_|
//
//

export interface ChessState {
  board: {
    chessmen: Map<Coordinates, Chess.Chessman>
  }
}

//
//                       _|      _|
//   _|_|_|    _|_|_|  _|_|_|_|        _|_|    _|_|_|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
//   _|_|_|    _|_|_|      _|_|  _|    _|_|    _|    _|
//
//
//
//   _|
// _|_|_|_|  _|    _|  _|_|_|      _|_|      _|_|_|
//   _|      _|    _|  _|    _|  _|_|_|_|  _|_|
//   _|      _|    _|  _|    _|  _|            _|_|
//     _|_|    _|_|_|  _|_|_|      _|_|_|  _|_|_|
//                 _|  _|
//             _|_|    _|

export /* for testing */ const RESET_BOARD = '@@react-app-base/chess/RESET_BOARD'
export /* for testing */ const HALF_MOVE = '@@react-app-base/chess/HALF_MOVE' // neither castle nor capture pawn en passant
export /* for testing */ const PUT_CHESSMAN = '@@react-app-base/chess/PUT_CHESSMAN'
export /* for testing */ const REMOVE_CHESSMAN = '@@react-app-base/chess/REMOVE_CHESSMAN'

const chessActionTypes = [
  RESET_BOARD,
  HALF_MOVE,
  PUT_CHESSMAN,
  REMOVE_CHESSMAN,
]

interface ResetBoardAction extends Action<typeof RESET_BOARD> {} // TODO: chess 960

interface HalfMoveAction extends Action<typeof HALF_MOVE> {
  payload: {
    chessman: Chess.Chessman
    source: Chess.Coordinates
    target: Chess.Coordinates
  }
}

interface PutChessmanAction extends Action<typeof PUT_CHESSMAN> {
  payload: {
    chessman: Chess.Chessman
    target: Chess.Coordinates
  }
}

interface RemoveChessmanAction extends Action<typeof REMOVE_CHESSMAN> {
  payload: {
    coord: Chess.Coordinates
  }
}

export type ChessAction =
  | ResetBoardAction
  | HalfMoveAction
  | PutChessmanAction
  | RemoveChessmanAction

function isChessAction(action: Action): action is ChessAction {
  return chessActionTypes.includes(action.type)
}

//
//                       _|      _|
//   _|_|_|    _|_|_|  _|_|_|_|        _|_|    _|_|_|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
// _|    _|  _|          _|      _|  _|    _|  _|    _|
//   _|_|_|    _|_|_|      _|_|  _|    _|_|    _|    _|
//
//
//
//                                           _|
//   _|_|_|  _|  _|_|    _|_|      _|_|_|  _|_|_|_|    _|_|    _|  _|_|    _|_|_|
// _|        _|_|      _|_|_|_|  _|    _|    _|      _|    _|  _|_|      _|_|
// _|        _|        _|        _|    _|    _|      _|    _|  _|            _|_|
//   _|_|_|  _|          _|_|_|    _|_|_|      _|_|    _|_|    _|        _|_|_|
//
//

export const resetBoard = (): ResetBoardAction => ({
  type: RESET_BOARD,
})

export const halfMove = (chessman: Chess.Chessman, source: Chess.Coordinates, target: Chess.Coordinates): HalfMoveAction => ({
  type: HALF_MOVE,
  payload: {
    chessman,
    source,
    target,
  },
})

export const putChessman = (chessman: Chess.Chessman, target: Chess.Coordinates): PutChessmanAction => ({
  type: PUT_CHESSMAN,
  payload: {
    chessman,
    target,
  },
})

export const removeChessman = (coord: Chess.Coordinates): RemoveChessmanAction => ({
  type: REMOVE_CHESSMAN,
  payload: {
    coord,
  },
})

//
//                           _|
// _|  _|_|    _|_|      _|_|_|  _|    _|    _|_|_|    _|_|    _|  _|_|
// _|_|      _|_|_|_|  _|    _|  _|    _|  _|        _|_|_|_|  _|_|
// _|        _|        _|    _|  _|    _|  _|        _|        _|
// _|          _|_|_|    _|_|_|    _|_|_|    _|_|_|    _|_|_|  _|
//
//

export const createChessReducer: (initialState: ChessState) => Reducer<ChessState, Action> = (initialState) => (state = initialState, action) => {
  if (!isChessAction(action)) {
    return state
  }

  switch (action.type) {
    case RESET_BOARD: return {
      ...state,
      board: {
        chessmen: Map([
          [new Coordinates({ rank: 1, file: 1 }), { symbol: '♖' }],
          [new Coordinates({ rank: 1, file: 2 }), { symbol: '♘' }],
          [new Coordinates({ rank: 1, file: 3 }), { symbol: '♗' }],
          [new Coordinates({ rank: 1, file: 4 }), { symbol: '♕' }],
          [new Coordinates({ rank: 1, file: 5 }), { symbol: '♔' }],
          [new Coordinates({ rank: 1, file: 6 }), { symbol: '♗' }],
          [new Coordinates({ rank: 1, file: 7 }), { symbol: '♘' }],
          [new Coordinates({ rank: 1, file: 8 }), { symbol: '♖' }],
          [new Coordinates({ rank: 2, file: 1 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 2, file: 2 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 2, file: 3 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 2, file: 4 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 2, file: 5 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 2, file: 6 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 2, file: 7 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 2, file: 8 }), { symbol: '♙', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 1 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 2 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 3 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 4 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 5 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 6 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 7 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 7, file: 8 }), { symbol: '♟', hasAdvancedTwoSquares: false }],
          [new Coordinates({ rank: 8, file: 1 }), { symbol: '♜' }],
          [new Coordinates({ rank: 8, file: 2 }), { symbol: '♞' }],
          [new Coordinates({ rank: 8, file: 3 }), { symbol: '♝' }],
          [new Coordinates({ rank: 8, file: 4 }), { symbol: '♛' }],
          [new Coordinates({ rank: 8, file: 5 }), { symbol: '♚' }],
          [new Coordinates({ rank: 8, file: 6 }), { symbol: '♝' }],
          [new Coordinates({ rank: 8, file: 7 }), { symbol: '♞' }],
          [new Coordinates({ rank: 8, file: 8 }), { symbol: '♜' }],
        ]),
      },
    }
    case HALF_MOVE: return state
    case PUT_CHESSMAN: return {
      ...state,
      board: {
        ...state.board,
        chessmen: state.board.chessmen.set(new Coordinates(action.payload.target), action.payload.chessman), // TODO
      },
    }
    case REMOVE_CHESSMAN: return {
      ...state,
      board: {
        ...state.board,
        chessmen: state.board.chessmen.delete(new Coordinates(action.payload.coord)), // TODO
      },
    }
  }
}

//
//                                           _|
//   _|_|_|    _|_|    _|  _|_|  _|      _|        _|_|_|    _|_|
// _|_|      _|_|_|_|  _|_|      _|      _|  _|  _|        _|_|_|_|
//     _|_|  _|        _|          _|  _|    _|  _|        _|
// _|_|_|      _|_|_|  _|            _|      _|    _|_|_|    _|_|_|
//
//

@injectable()
export class ChessService {
  private *halfMoveSaga({ payload: { chessman, source, target } }: HalfMoveAction): SagaIterator {
    // TODO: check move

    // TODO: castle

    // TODO: remove en passant

    yield put(removeChessman(source))
    yield put(putChessman(chessman, target))

    // TODO: turn
  }

  public *rootSaga(): SagaIterator {
    yield takeEvery(HALF_MOVE, [this, this.halfMoveSaga])
  }
}
