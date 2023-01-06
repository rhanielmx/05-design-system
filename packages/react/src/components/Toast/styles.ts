import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',
  backgroundColor: '$gray800',
  border: '4px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$sm',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontWeight: '$regular',
  fontSize: '$sm',
})

export const ToastAction = styled(Toast.Action, {})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',

  '&:hover': {
    cursor: 'pointer',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  top: '$16',
  left: '$4',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  gap: '$1',
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
