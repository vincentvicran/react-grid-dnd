import RGL, {WidthProvider} from 'react-grid-layout'

import './App.css'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import {DraggableHandle} from './components/gridHandle.component'

const ReactGridLayout = WidthProvider(RGL)

function App() {
  return (
    <div style={{width: 500}}>
      <ReactGridLayout
        className="layout"
        // layout={layout}
        cols={6}
        rowHeight={30}
        onLayoutChange={(layout) => console.log({layout})}
        isDroppable
        isDraggable
        isResizable={false}
        autoSize
        // draggableCancel=".grid-item"
        // resizeHandle=".resizable-handle"
        // draggableHandle=".react-draggable-handle"
      >
        {['a', 'b', 'c', 'd'].map((key) => (
          <DraggableHandle
            key={key}
            className="grid-item"
            data-grid={layout.find((el) => el.i === key)}
          >
            {key}
            {key === 'c' && <div>x</div>}
            {key === 'c' && <div>x</div>}
            {key === 'c' && <div>x</div>}
            {key === 'c' && <div>x</div>}
          </DraggableHandle>
        ))}
      </ReactGridLayout>
    </div>
  )
}

export default App

const layout = [
  {i: 'a', x: 0, y: 0, w: 2, h: 2},
  {i: 'b', x: 0, y: 2, w: 2, h: 2},
  {i: 'c', x: 2, y: 0, w: 4, h: 4},
  {i: 'd', x: 4, y: 0, w: 4, h: 2}
]
