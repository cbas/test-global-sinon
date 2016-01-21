var sinon = require('sinon')
var assert = require('assert')
var download = require('..')

describe('the code', function () {
  it('does something', function () {
    var stub = sinon.stub(global, 'fetch')
    stub.withArgs('/bla').returns('ok')

    assert(download('/bla') === 'ok')

    stub.restore()
  })
})
