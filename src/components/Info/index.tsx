import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import assert from 'assert'
import { Either, isLeft, isRight, left, right } from 'fp-ts/lib/Either'
import { resolve } from 'inversify-react'
import React from 'react'
import { FormattedMessage, WrappedComponentProps, injectIntl } from 'react-intl'

import GetRepo from '~/useCase/GetRepo'
import messages from './messages'

type Props =
  & WrappedComponentProps

interface State {
  successful: boolean
  fetching: boolean
  repo?: Either<Error, GitHubApi.Repository> | null
}

class Info extends React.Component<Props, State> {
  @resolve('GetRepo') private readonly getRepo!: GetRepo

  public override state: Readonly<State> = {
    successful: true,
    fetching: false,
  }

  private handleClick: React.MouseEventHandler = () => {
    this.setState({
      fetching: true,
    })

    this.getRepo.apply({ owner: 'sueka', repo: 'rap' }).then(
      (output) => {
        if (output.successful) {
          this.setState({
            successful: true,
            fetching: false,
            repo: right(output.response.body),
          })
        } else {
          this.setState({
            successful: false,
            fetching: false,
            repo: left(new Error(output.response.body.message)),
          })
        }
      },
      (reason: unknown) => {
        console.error(reason) // tslint:disable-line:no-console

        this.setState({
          successful: false,
          fetching: false,
          repo: null,
        })
      }
    )
  }

  private get statusText() {
    const { intl: { formatMessage } } = this.props
    const { successful, fetching, repo } = this.state

    if (fetching) {
      return formatMessage(messages.fetching)
    } else {
      if (repo == null) {
        return formatMessage(messages.fetchingNotStarted)
      } else {
        if (isRight(repo)) {
          assert(successful)

          return formatMessage(messages.fetchingDoneSuccessfully)
        } else {
          assert(!successful)

          return formatMessage(messages.fetchingFailed)
        }
      }
    }
  }

  private get info() {
    const { repo } = this.state

    if (repo == null) {
      return repo
    }

    if (isLeft(repo)) {
      return repo.toString()
    }

    return <Link href={ repo.right.html_url }>{ repo.right.full_name }</Link>
  }

  public override render() {
    return (
      <>
        <Button onClick={ this.handleClick } disabled={ this.state.fetching } variant="contained" color="secondary">
          <FormattedMessage { ...messages.fetchData } />
        </Button>
        <Typography>
          { this.statusText }
        </Typography>
        { this.info != null && ( // tslint:disable-line:strict-boolean-expressions
          <Typography component="span">{ this.info }</Typography>
        ) }
      </>
    )
  }
}

export default injectIntl(Info)
