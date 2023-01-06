import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Text } from '../Text'
import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export function Toast() {
  return (
    <ToastPrimitive.Provider>
      <Button>Open</Button>
      <ToastRoot open={true}>
        <ToastTitle asChild>
          <Heading>Agendamento realizado</Heading>
        </ToastTitle>
        <ToastDescription asChild>
          <Text>Quarta-feira, 23 de Outubro às 16h</Text>
        </ToastDescription>
        {/* <ToastAction /> */}
        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

export interface ToastProps {} // extends ComponentProps<typeof Toast> {}

Toast.displayName = 'Toast'
