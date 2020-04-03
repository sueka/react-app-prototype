import classnames from 'classnames'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import Button, { ButtonProps } from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel'

import cssClasses from './classes.css'
import messages from './messages'

interface Props extends Alt.Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onClick' | 'onChange'> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  buttonLabel?: React.ReactNode
  renderResultMessage?(files: File[] | null): React.ReactNode
  classes?: {
    root?: string
    button?: string
  }
  component?: React.ElementType

  /**
   * Merges className, with mimicking Material-UI.
   */
  ButtonProps?: Alt.Omit<ButtonProps, 'disabled' | 'onClick'>
}

const FileUpload: React.FunctionComponent<Props> = ({
  className,
  disabled,
  multiple,
  onClick,
  onChange,
  buttonLabel = <FormattedMessage { ...messages.browse } />,
  renderResultMessage = (files) => {
    if (files === null) {
      return <FormattedMessage { ...messages.noFileSelected } />
    }

    switch (files.length) {
      case 1:
        return files[0].name
      default:
        return <FormattedMessage { ...messages.nFilesSelected } values={ { n: files.length } } />
    }
  },
  classes: muiClasses,
  component: Component = FormLabel,
  ButtonProps,
  ...restInputProps
}: Props) => {
  const [files, setFiles] = useState<File[] | null>(null) // NOTE: (event: ChangeEvent).target.files をそのまま使うと参照が変わらないので rerender されない。

  const rootClassName = useMemo(() => classnames(className, muiClasses?.root, cssClasses.FileUpload), [className, muiClasses?.root, cssClasses.FileUpload])
  const buttonClassName = useMemo(() => classnames(muiClasses?.button, cssClasses.Button, ButtonProps?.className), [muiClasses?.button, cssClasses.Button, ButtonProps?.className])

  const resultMessage = useMemo(() => renderResultMessage(files), [renderResultMessage, files])

  const input = useRef<HTMLInputElement>(null)

  const handleInputChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange?.(event)
    setFiles(event.target.files !== null ? Array.from(event.target.files) : event.target.files)
  }, [onChange])

  const fireInputClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    input.current?.dispatchEvent(new MouseEvent('click')) // FIXME: Element.click()
  }, [input])

  const handleButtonClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    onClick?.(event)

    if (!event.isDefaultPrevented()) {
      fireInputClick(event)
    }
  }, [onClick])

  return (
    <Component className={ rootClassName }>
      <Button
        disabled={ disabled }
        onClick={ handleButtonClick }
        { ...ButtonProps }
        className={ buttonClassName } // NOTE: override ButtonProps.className
      >
        { buttonLabel }
      </Button>
      { resultMessage }
      <input
        className={ cssClasses.Input }
        type="file"
        disabled={ disabled }
        multiple={ multiple }
        onChange={ handleInputChange }
        ref={ input }
        { ...restInputProps }
      />
    </Component>
  )
}

export default FileUpload
