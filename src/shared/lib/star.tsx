// // Add the 'use client' directive at the top of the file

// "use client"

// import {  useState, useEffect } from 'react'

// const Star: React.FC = () => {
//   const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

//   useEffect(() => {
//     const updatePosition = () => {
//       setPosition({
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//       })
//     }

//     const interval = setInterval(updatePosition, 100) // Adjusted animation speed

//     return () => {
//       clearInterval(interval)
//     }
//   }, [])

//   const style = {
//     position: 'absolute',
//     top: position.y,
//     left: position.x,
//     width: '3px',
//     height: '3px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: '50%',
//     transform: 'translate(-50%, -50%)',
//   }

//   return <div className="absolute h-3 w-3 rounded-full" style={style} />
// }

// export default Star