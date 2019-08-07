import assert from 'assert'

import TaskId from 'src/domain/vo/TaskId'
import Entity from './Entity'

export interface TaskRequest {
  id?: TaskId
  content?: string
  done?: boolean
}

export default class Task extends Entity {
  private _content: string
  private _done: boolean

  constructor({
    id,
    content = '',
    done = false,
  }: TaskRequest) {
    super(id)

    this._content = content
    this._done = done
  }

  static deserialize(task: string): Task {
    const { id, content, done } = JSON.parse(task)

    // TODO: shape & type check

    return new Task({ id, content, done })
  }

  serialize(): string {
    return JSON.stringify({
      id: this.id,
      content: this.content,
      done: this.done,
    })
  }

  get content() {
    return this._content
  }

  set content(value) {
    assert(value.length <= 140)

    this._content = value
  }

  get done() {
    return this._done
  }

  set done(value) {
    this._done = value
  }
}
