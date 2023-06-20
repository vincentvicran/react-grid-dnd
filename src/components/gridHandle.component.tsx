import {forwardRef} from 'react'

// export const ResizableHandle = forwardRef<
//   HTMLDivElement,
//   React.ComponentPropsWithoutRef<'div'>
// >(
//   (
//     {style, className, onMouseDown, onMouseUp, onTouchEnd, children, ...props},
//     ref
//   ) => {
//     return (
//       <div
//         style={{...style}}
//         className={className}
//         ref={ref}
//         onMouseDown={onMouseDown}
//         onMouseUp={onMouseUp}
//         onTouchEnd={onTouchEnd}
//         {...props}
//       >
//         <div className=".react-resizable-handle">Resize</div>
//         {/* Some other content */}
//         {children} {/* Make sure to include children to add resizable handle */}
//       </div>
//     )
//   }
// )

export const DraggableHandle = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(
  (
    {style, className, onMouseDown, onMouseUp, onTouchEnd, children, ...props},
    ref
  ) => {
    return (
      <div
        style={{...style}}
        className={className}
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        {...props}
      >
        <div className=".react-draggable-handle">Drag</div>
        {/* Some other content */}
        {children} {/* Make sure to include children to add resizable handle */}
      </div>
    )
  }
)
