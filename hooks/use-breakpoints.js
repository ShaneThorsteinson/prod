import useMedia from 'hooks/use-media'

const useBreakpoints = () => {
  return {
    isXs: useMedia(['(max-width: 640px)'], [true], false),
    isSm: useMedia(['(min-width: 641px) and (max-width: 768px)'], [true], false),
    isMd: useMedia(['(min-width: 769px) and (max-width: 1024px)'], [true], false),
    isLg: useMedia(['(min-width: 1025px) and (max-width: 1280px)'], [true], false),
    isXl: useMedia(['(min-width: 1281px)'], [true], false)
  }
}

export default useBreakpoints
