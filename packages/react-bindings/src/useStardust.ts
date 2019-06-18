import * as React from 'react'
import useStateManager from './useStateManager'
import renderComponent, {
  RenderConfig,
  RenderResultConfig,
} from '@stardust-ui/react/src/lib/renderComponent'
import { ThemeContext } from 'react-fela'
import { Manager } from '@stardust-ui/state'

const useStardust = <P = {}>(
  config: RenderConfig<P> & { autoControlledProps: string[] },
): RenderResultConfig<P> & {
  manager: Manager<any, any>
} => {
  const context = React.useContext(ThemeContext)
  const manager = useStateManager(
    config.props.stateManager,
    config.props,
    config.autoControlledProps,
  )

  const {
    className,
    displayName,
    handledProps,
    props,
    state,
    actionHandlers,
    focusZoneRef,
  } = config

  // TODO :O OMG
  let result = {}

  renderComponent(
    {
      className,
      displayName,
      handledProps,
      props,
      state,
      actionHandlers,
      focusZoneRef,
      render: config => {
        // TODO :O OMG
        result = config
      },
    },
    // TODO: :/
    context as any,
  )

  // TODO :O OMG
  return { ...result, manager }
}

export default useStardust
