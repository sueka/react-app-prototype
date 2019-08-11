import { Action, Reducer } from 'redux'
import { SagaIterator } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { injectable, inject } from 'inversify'
import assert from 'assert'

import { takeEvery } from 'src/lib/boni/redux-saga/effects'
import TaskId from 'src/domain/vo/TaskId'
import Task from 'src/domain/entity/Task'
import TaskRepository from 'src/domain/repository/TaskRepository'

//
//             _|                  _|
//   _|_|_|  _|_|_|_|    _|_|_|  _|_|_|_|    _|_|
// _|_|        _|      _|    _|    _|      _|_|_|_|
//     _|_|    _|      _|    _|    _|      _|
// _|_|_|        _|_|    _|_|_|      _|_|    _|_|_|
//
//

export interface ReminderState {
  tasks: Task[]
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

export /* for testing */ const ADD_TASK_ASYNC = '@@react-app-prototype/reminder/ADD_TASK_ASYNC'
export /* for testing */ const CHANGE_TASK_CONTENT_ASYNC = '@@react-app-prototype/reminder/CHANGE_TASK_CONTENT_ASYNC'
export /* for testing */ const MARK_TASK_AS_DONE_ASYNC = '@@react-app-prototype/reminder/MARK_TASK_AS_DONE_ASYNC'
export /* for testing */ const MARK_TASK_AS_UNDONE_ASYNC = '@@react-app-prototype/reminder/MARK_TASK_AS_UNDONE_ASYNC'
export /* for testing */ const DELETE_TASK_ASYNC = '@@react-app-prototype/reminder/DELETE_TASK_ASYNC'
export /* for testing */ const MOVE_TASK = '@@react-app-prototype/reminder/MOVE_TASK' // TODO: rename
export /* for testing */ const PUSH_TASK = '@@react-app-prototype/reminder/PUSH_TASK'
export /* for testing */ const UPDATE_TASK = '@@react-app-prototype/reminder/UPDATE_TASK'
export /* for testing */ const REMOVE_TASK = '@@react-app-prototype/reminder/REMOVE_TASK'

const reminderActionTypes = [
  ADD_TASK_ASYNC,
  CHANGE_TASK_CONTENT_ASYNC,
  MARK_TASK_AS_DONE_ASYNC,
  MARK_TASK_AS_UNDONE_ASYNC,
  DELETE_TASK_ASYNC,
  MOVE_TASK,
  PUSH_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
]

interface AddTaskAsyncAction extends Action<typeof ADD_TASK_ASYNC> {}

interface ChangeTaskContentAsyncAction extends Action<typeof CHANGE_TASK_CONTENT_ASYNC> {
  payload: {
    taskId: TaskId
    content: Task['content']
  }
}

interface MarkTaskAsDoneAsyncAction extends Action<typeof MARK_TASK_AS_DONE_ASYNC> {
  payload: {
    taskId: TaskId
  }
}

interface MarkTaskAsUndoneAsyncAction extends Action<typeof MARK_TASK_AS_UNDONE_ASYNC> {
  payload: {
    taskId: TaskId
  }
}

interface DeleteTaskAsyncAction extends Action<typeof DELETE_TASK_ASYNC> {
  payload: {
    taskId: TaskId
  }
}

interface MoveTaskAction extends Action<typeof MOVE_TASK> {
  payload: {
    sourceIndex: number
    destinationIndex: number
  }
}

interface PushTaskAction extends Action<typeof PUSH_TASK> {
  payload: {
    task: Task
  }
}

interface UpdateTaskAction extends Action<typeof UPDATE_TASK> {
  payload: {
    taskId: TaskId
    task: Task
  }
}

interface RemoveTaskAction extends Action<typeof REMOVE_TASK> {
  payload: {
    taskId: TaskId
  }
}

export type ReminderAction =
  | AddTaskAsyncAction
  | ChangeTaskContentAsyncAction
  | MarkTaskAsDoneAsyncAction
  | MarkTaskAsUndoneAsyncAction
  | DeleteTaskAsyncAction
  | MoveTaskAction
  | PushTaskAction
  | UpdateTaskAction
  | RemoveTaskAction

function isReminderAction(action: Action): action is ReminderAction {
  return reminderActionTypes.includes(action.type)
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

export const addTaskAsync = (): AddTaskAsyncAction => ({
  type: ADD_TASK_ASYNC,
})

export const changeTaskContentAsync = (taskId: TaskId, content: string): ChangeTaskContentAsyncAction => ({
  type: CHANGE_TASK_CONTENT_ASYNC,
  payload: {
    taskId,
    content,
  },
})

export const markTaskAsDoneAsync = (taskId: TaskId): MarkTaskAsDoneAsyncAction => ({
  type: MARK_TASK_AS_DONE_ASYNC,
  payload: {
    taskId,
  },
})

export const markTaskAsUndoneAsync = (taskId: TaskId): MarkTaskAsUndoneAsyncAction => ({
  type: MARK_TASK_AS_UNDONE_ASYNC,
  payload: {
    taskId,
  },
})

export const deleteTaskAsync = (taskId: TaskId): DeleteTaskAsyncAction => ({
  type: DELETE_TASK_ASYNC,
  payload: {
    taskId,
  },
})

export const moveTask = (sourceIndex: number, destinationIndex: number): MoveTaskAction => ({
  type: MOVE_TASK,
  payload: {
    sourceIndex,
    destinationIndex,
  },
})

export const pushTask = (task: Task): PushTaskAction => ({
  type: PUSH_TASK,
  payload: {
    task,
  },
})

export const updateTask = (taskId: TaskId, task: Task): UpdateTaskAction => ({
  type: UPDATE_TASK,
  payload: {
    taskId,
    task,
  },
})

export const removeTask = (taskId: TaskId): RemoveTaskAction => ({
  type: REMOVE_TASK,
  payload: {
    taskId,
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

export const createReminderReducer: (initialState: ReminderState) => Reducer<ReminderState, Action> = (initialState) => (state = initialState, action) => {
  if (!isReminderAction(action)) {
    return state
  }

  switch (action.type) {
    case ADD_TASK_ASYNC:
    case CHANGE_TASK_CONTENT_ASYNC:
    case MARK_TASK_AS_DONE_ASYNC:
    case MARK_TASK_AS_UNDONE_ASYNC:
    case DELETE_TASK_ASYNC: return state
    case MOVE_TASK: {
      const restTasks = [
        ...state.tasks.slice(0, action.payload.sourceIndex),
        ...state.tasks.slice(action.payload.sourceIndex + 1),
      ]

      return {
        tasks: [
          ...restTasks.slice(0, action.payload.destinationIndex),
          state.tasks[action.payload.sourceIndex],
          ...restTasks.slice(action.payload.destinationIndex),
        ],
      }
    }
    case PUSH_TASK: return {
      ...state,
      tasks: [
        ...state.tasks,
        action.payload.task,
      ],
    }
    case UPDATE_TASK: {
      assert(action.payload.taskId.equals(action.payload.task.id))

      const i = state.tasks.findIndex((task) => task.id.equals(action.payload.taskId))

      if (i === -1) {
        throw new Error() // TODO:
      }

      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, i),
          action.payload.task,
          ...state.tasks.slice(i + 1),
        ],
      }
    }
    case REMOVE_TASK: {
      const i = state.tasks.findIndex((task) => task.id.equals(action.payload.taskId))

      if (i === -1) {
        throw new Error() // TODO:
      }

      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, i),
          ...state.tasks.slice(i + 1),
        ],
      }
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
export class ReminderService {
  @inject('TaskRepository') public taskRepository!: TaskRepository

  private *addTaskAsyncSaga(): SagaIterator {
    const task = new Task({})

    yield call(this.taskRepository.store, task)
    yield put(pushTask(task))
  }

  private *changeTaskContentAsyncSaga({ payload: { taskId, content } }: ChangeTaskContentAsyncAction): SagaIterator {
    const task: ResultType<ReturnType<this['taskRepository']['findById']>> = yield call(this.taskRepository.findById, taskId)

    task.content = content // tslint:disable-line:no-object-mutation

    yield call(this.taskRepository.store, task)
    yield put(updateTask(taskId, task))
  }

  private *markTaskAsDoneAsyncSaga({ payload: { taskId } }: MarkTaskAsDoneAsyncAction): SagaIterator {
    const task: ResultType<ReturnType<this['taskRepository']['findById']>> = yield call(this.taskRepository.findById, taskId)

    task.done = true // tslint:disable-line:no-object-mutation

    yield call(this.taskRepository.store, task)
    yield put(updateTask(taskId, task))
  }

  private *markTaskAsUndoneAsyncSaga({ payload: { taskId } }: MarkTaskAsUndoneAsyncAction): SagaIterator {
    const task: ResultType<ReturnType<this['taskRepository']['findById']>> = yield call(this.taskRepository.findById, taskId)

    task.done = false // tslint:disable-line:no-object-mutation

    yield call(this.taskRepository.store, task)
    yield put(updateTask(taskId, task))
  }

  private *deleteTaskAsyncSaga({ payload: { taskId } }: DeleteTaskAsyncAction): SagaIterator {
    yield call(this.taskRepository.remove, taskId)
    yield put(removeTask(taskId))
  }

  public *rootSaga(): SagaIterator {
    yield takeEvery(ADD_TASK_ASYNC, [this, this.addTaskAsyncSaga])
    yield takeEvery(CHANGE_TASK_CONTENT_ASYNC, [this, this.changeTaskContentAsyncSaga])
    yield takeEvery(MARK_TASK_AS_DONE_ASYNC, [this, this.markTaskAsDoneAsyncSaga])
    yield takeEvery(MARK_TASK_AS_UNDONE_ASYNC, [this, this.markTaskAsUndoneAsyncSaga])
    yield takeEvery(DELETE_TASK_ASYNC, [this, this.deleteTaskAsyncSaga])
  }
}