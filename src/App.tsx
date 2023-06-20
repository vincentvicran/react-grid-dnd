import GridLayout, {WidthProvider} from 'react-grid-layout'

import './App.css'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const GridLayoutWidth = WidthProvider(GridLayout)

function App() {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 2},
    {i: 'b', x: 0, y: 2, w: 2, h: 2},
    {i: 'c', x: 2, y: 0, w: 4, h: 2},
    {i: 'd', x: 4, y: 0, w: 4, h: 2}
  ]
  return (
    <div style={{width: 500}}>
      <GridLayoutWidth
        className="layout"
        layout={layout}
        cols={6}
        rowHeight={30}
        onLayoutChange={(layout) => console.log({layout})}
        isDroppable
        // draggableCancel=".grid-item"
        // resizeHandle=".resizable-handle"
        // draggableHandle=" .draggable-handle .grid-item"
      >
        <div key="d" className=".draggable-handle">
          draggable
        </div>
        <div key="a" className="grid-item">
          <div className=".draggable-handle">draggable</div>a
        </div>
        <div key="b" className="grid-item">
          b
        </div>
        <div key="c" className="grid-item">
          c
        </div>
      </GridLayoutWidth>
    </div>
  )
}

export default App
