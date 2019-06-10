var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeMoreThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name height message', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
      expect(index.message).toInclude(index.message)
      
      
  })

})

