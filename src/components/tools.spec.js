/* eslint-env jest */

import { merge, merge2, mod, raise, childArray } from './tools'

describe('Tools', () => {
  describe('merge', () => {
    test('returns undefined if no items', () => {
      const merged = merge()
      expect(merged).toBeUndefined()
    })

    test('returns undefined if empty string', () => {
      const merged = merge('')
      expect(merged).toBeUndefined()

      const merged2 = merge('', '')
      expect(merged2).toBeUndefined()
    })

    test('merges multiple', () => {
      const merged = merge('test', 'test2')
      expect(merged).toBe('test test2')
    })

    test('merges multiple when one is undefined', () => {
      const merged = merge('test', undefined)
      expect(merged).toBe('test')
    })
  })

  describe('merge2', () => {
    test('returns undefined if no items', () => {
      const merged = merge2('')
      expect(merged).toBeUndefined()
    })

    test('returns base if not secondary', () => {
      const merged = merge2('base')
      expect(merged).toBe('base')
    })

    test('returns merged', () => {
      const merged = merge2('base', 'second')
      expect(merged).toBe('base-second')
    })
  })

  describe('mod', () => {
    test('returns undefined when false-like', () => {
      const modifier = mod('pre', '')
      expect(modifier).toBeUndefined()
    })

    test('returns prefixed when modifier is provided', () => {
      const modifier = mod('pre', 'mod')
      expect(modifier).toBe('pre-mod')
    })
  })

  describe('raise', () => {
    test('invokes when true', () => {
      const fn = jest.fn()
      raise(true, fn)
      expect(fn).toHaveBeenCalledTimes(1)
    })

    test('invokes when true-like', () => {
      const fn = jest.fn()
      raise('true', fn)
      expect(fn).toHaveBeenCalledTimes(1)
    })

    test('does not invokes when false', () => {
      const fn = jest.fn()
      raise(false, fn)
      expect(fn).toHaveBeenCalledTimes(0)
    })

    test('does not invokes when false-like', () => {
      const fn = jest.fn()
      raise('', fn)
      expect(fn).toHaveBeenCalledTimes(0)
    })
  })

  describe('childArray', () => {
    test('returns initial array', () => {
      const children = [0, 1]
      const newChildren = childArray(children)
      expect(newChildren).toBe(children)
    })

    test('returns new array for undefined', () => {
      const newChildren = childArray(undefined)
      expect(newChildren).toEqual([])
    })

    test('returns new array for undefined', () => {
      const children = 'child'
      const newChildren = childArray(children)
      expect(newChildren).toEqual([children])
    })
  })
})
