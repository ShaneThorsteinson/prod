export const defaultTooltipPosition = {
  top: '-1000px',
  left: '-1000px',
  transform: 'none'
}

export const getPosition = (
  placement,
  rect,
  offset
) => {
  const positions = {
    top: {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, -100%)'
    },
    topStart: {
      top: `${rect.top - offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, -100%)'
    },
    topEnd: {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, -100%)'
    },
    bottom: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, 0)'
    },
    bottomStart: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, 0)'
    },
    bottomEnd: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, 0)'
    },
    left: {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, -50%)'
    },
    leftStart: {
      top: `${rect.top}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, 0)'
    },
    leftEnd: {
      top: `${rect.top + rect.height}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, -100%)'
    },
    right: {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, -50%)'
    },
    rightStart: {
      top: `${rect.top}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, 0)'
    },
    rightEnd: {
      top: `${rect.top + rect.height}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, -100%)'
    }
  }

  return positions[placement] || (positions.top)
}

export const getIconPosition = (
  placement,
  offset
) => {
  const positions = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: `${offset}px`,
      transform: 'translate(-50%, 100%) rotate(-90deg)'
    },
    topStart: {
      top: 'auto',
      right: 'auto',
      left: '5%',
      bottom: `${offset}px`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    topEnd: {
      top: 'auto',
      right: '5%',
      left: 'auto',
      bottom: `${offset}px`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    bottom: {
      top: `${offset}px`,
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -100%) rotate(90deg)'
    },
    bottomStart: {
      top: `${offset}px`,
      right: 'auto',
      left: '5%',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    bottomEnd: {
      top: `${offset}px`,
      right: '5%',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    left: {
      top: '50%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftStart: {
      top: '10%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, 0) rotate(180deg)'
    },
    leftEnd: {
      top: 'auto',
      right: '0',
      left: 'auto',
      bottom: '10%',
      transform: 'translate(100%, 0) rotate(180deg)'
    },
    right: {
      top: '50%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightStart: {
      top: '10%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, 0) rotate(0deg)'
    },
    rightEnd: {
      top: 'auto',
      right: 'auto',
      left: '0',
      bottom: '10%',
      transform: 'translate(-100%, 0) rotate(0deg)'
    }
  }

  return positions[placement] || positions.top
}
