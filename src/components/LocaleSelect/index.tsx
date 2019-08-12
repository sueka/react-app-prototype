import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { v4 } from 'uuid'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'

import { Code, isCode, getNativeNameByCode } from 'src/lib/languageNameSolver'

import messages from './messages'

export interface StateProps {
  availableLocales: Code[]
  locale: Code
}

export interface DispatchProps {
  select(locale: Code): void
}

type Props =
  & StateProps
  & DispatchProps

const LocaleSelect: React.FunctionComponent<Props> = ({ availableLocales, locale, select }) => {
  const inputId = React.useMemo(v4, [])

  const handleChange = React.useCallback<React.ChangeEventHandler<HTMLSelectElement>>((event) => {
    if (isCode(event.currentTarget.value)) {
      select(event.currentTarget.value)
    }
  }, [])

  return (
    <FormControl>
      <InputLabel htmlFor={ inputId }>
        <FormattedMessage { ...messages.languages } />
      </InputLabel>
      <NativeSelect value={ locale } onChange={ handleChange } id={ inputId } inputProps={ { 'data-testid': 'localeSelect' } }>
        { availableLocales.map((availableLocale, i) => (
          <option key={ i } value={ availableLocale }>{ getNativeNameByCode(availableLocale) }</option>
        )) }
      </NativeSelect>
    </FormControl>
  )
}

export default LocaleSelect
