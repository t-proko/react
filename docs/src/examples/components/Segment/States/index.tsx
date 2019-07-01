import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const States = () => (
  <ExampleSection title="States">
    <ComponentExample
      title="Disabled"
      description="A segment can show it is currently unable to be interacted with."
      examplePath="components/Segment/States/SegmentExampleDisabled"
    />
  </ExampleSection>
)

export default States
