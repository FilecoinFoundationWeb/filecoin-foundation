import { renderHook } from '@testing-library/react'

import { useVisiblePages, ELLIPSIS } from './useVisiblePages'

describe('useVisiblePages', () => {
  describe('error cases', () => {
    it('should throw error when range is 0', () => {
      expect(() => {
        renderHook(() =>
          useVisiblePages({ pageCount: 10, currentPage: 1, range: 0 }),
        )
      }).toThrow('range must be greater than 0')
    })

    it('should throw error when range is negative', () => {
      expect(() => {
        renderHook(() =>
          useVisiblePages({ pageCount: 10, currentPage: 1, range: -1 }),
        )
      }).toThrow('range must be greater than 0')
    })
  })

  describe('when page count is less than or equal to range', () => {
    it('should return all pages when page count equals range', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 5, currentPage: 1, range: 5 }),
      )
      expect(result.current).toEqual([1, 2, 3, 4, 5])
    })

    it('should return all pages when page count is less than range', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 3, currentPage: 1, range: 5 }),
      )
      expect(result.current).toEqual([1, 2, 3])
    })
  })

  describe('range = 1', () => {
    it('should return only current page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 4, range: 1 }),
      )
      expect(result.current).toEqual([4])
    })
  })

  describe('range = 2', () => {
    it('should show current and next page when on first page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 1, range: 2 }),
      )
      expect(result.current).toEqual([1, 2])
    })

    it('should show previous and current page when not on first page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 5, range: 2 }),
      )
      expect(result.current).toEqual([4, 5])
    })
  })

  describe('range = 3', () => {
    it('should show first, ellipsis, last when on first page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 1, range: 3 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 10])
    })

    it('should show first, current, last when on middle page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 5, range: 3 }),
      )
      expect(result.current).toEqual([1, 5, 10])
    })

    it('should show first, ellipsis, last when on last page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 10, range: 3 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 10])
    })
  })

  describe('range = 4', () => {
    it('should show first, next, ellipsis, last when on first page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 1, range: 4 }),
      )
      expect(result.current).toEqual([1, 2, ELLIPSIS, 10])
    })

    it('should show first, current, ellipsis, last when on middle page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 5, range: 4 }),
      )
      expect(result.current).toEqual([1, 5, ELLIPSIS, 10])
    })

    it('should show first, ellipsis, previous, last when on last page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 10, range: 4 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 9, 10])
    })

    it('should show first, ellipsis, current, last when one before last', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 10, currentPage: 9, range: 4 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 9, 10])
    })
  })
  describe('range = 5', () => {
    it('should show first, current, and last pages when on first page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 1, range: 5 }),
      )
      expect(result.current).toEqual([1, 2, 3, ELLIPSIS, 20])
    })

    it('should show first, ellipsis, current, and last pages when near start', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 3, range: 5 }),
      )
      expect(result.current).toEqual([1, 2, 3, ELLIPSIS, 20])
    })

    it('should show first, ellipsis, current, and last pages when near end', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 18, range: 5 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 18, 19, 20])
    })

    it('should show first, ellipsis, current, ellipsis, last when in middle', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 10, range: 5 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 10, ELLIPSIS, 20])
    })
  })

  describe('range = 6', () => {
    it('should show first, next pages, and last when on first page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 1, range: 6 }),
      )
      expect(result.current).toEqual([1, 2, 3, 4, ELLIPSIS, 20])
    })

    it('should show first, ellipsis, current, and last pages when near start', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 3, range: 6 }),
      )
      expect(result.current).toEqual([1, 2, 3, 4, ELLIPSIS, 20])
    })

    it('should show first, ellipsis, current, and last pages when near end', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 18, range: 6 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 17, 18, 19, 20])
    })

    it('should show first, ellipsis, current, ellipsis, last when in middle', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 10, range: 6 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 9, 10, ELLIPSIS, 20])
    })
  })
  describe('ranges > 6', () => {
    it('should show first, next pages, and last when on first page', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 1, range: 7 }),
      )
      expect(result.current).toEqual([1, 2, 3, 4, 5, ELLIPSIS, 20])
    })

    it('should show first, ellipsis, current, and last pages when near start', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 3, range: 7 }),
      )
      expect(result.current).toEqual([1, 2, 3, 4, 5, ELLIPSIS, 20])
    })

    it('should show first, ellipsis, current, and last pages when near end', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 18, range: 7 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 16, 17, 18, 19, 20])
    })

    it('should show first, ellipsis, current, ellipsis, last when in middle', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 10, range: 7 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 9, 10, 11, ELLIPSIS, 20])
    })

    it('should show more pages around current when range is larger', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 10, range: 9 }),
      )
      expect(result.current).toEqual([
        1,
        ELLIPSIS,
        8,
        9,
        10,
        11,
        12,
        ELLIPSIS,
        20,
      ])
    })

    it('should show more pages at start when near beginning', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 3, range: 9 }),
      )
      expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7, ELLIPSIS, 20])
    })

    it('should show more pages at end when near end', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 18, range: 9 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 14, 15, 16, 17, 18, 19, 20])
    })

    it('should show correct pages when range is 8 and current page is in middle', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 10, range: 8 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 8, 9, 10, 11, ELLIPSIS, 20])
    })

    it('should show correct pages when range is 8 and current page is near start', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 4, range: 8 }),
      )
      expect(result.current).toEqual([1, ELLIPSIS, 3, 4, 5, 6, ELLIPSIS, 20])
    })

    it('should show correct pages when range is 8 and current page is near end', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 17, range: 8 }),
      )
      expect(result.current).toEqual([
        1,
        ELLIPSIS,
        15,
        16,
        17,
        18,
        ELLIPSIS,
        20,
      ])
    })

    it('should show correct pages when range is 10 and current page is in middle', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 10, range: 10 }),
      )
      expect(result.current).toEqual([
        1,
        ELLIPSIS,
        7,
        8,
        9,
        10,
        11,
        12,
        ELLIPSIS,
        20,
      ])
    })

    it('should show correct pages when range is 10 and current page is near start', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 3, range: 10 }),
      )
      expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7, 8, ELLIPSIS, 20])
    })

    it('should show correct pages when range is 10 and current page is near end', () => {
      const { result } = renderHook(() =>
        useVisiblePages({ pageCount: 20, currentPage: 18, range: 10 }),
      )
      expect(result.current).toEqual([
        1,
        ELLIPSIS,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
      ])
    })
  })
})
