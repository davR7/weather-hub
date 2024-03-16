export const screenResolution = () => {
  const { width, height } = window.screen
  return `${width}x${height}`
}