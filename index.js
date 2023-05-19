import fs from 'fs'
import { CarBlockIterator } from '@ipld/car/iterator'
import Encodr from 'encodr'

const CBOR = new Encodr('cbor')

/* stolen code from https://github.com/nodejs/node/issues/947#issuecomment-119467568 */
blackholeEPIPE(process.stderr)
blackholeEPIPE(process.stdout)
function blackholeEPIPE(stream) {
  stream.on('error', onerror)
  function onerror(err) {
    if (err.code === 'EPIPE') {
      stream._write = noopWrite
      stream._writev = noopWritev
      stream._read = noopRead
      return stream.removeListener('error', onerror)
    }
    if (EE.listenerCount(stream, 'error') === 1) {
      stream.removeListener('error', onerror)
      stream.emit('error', err)
    }
  }
}
function noopWrite(chunk, enc, cb) {
  cb()
}
function noopRead() {
  this.push('')
}
function noopWritev(chunks, cb) {
  cb()
}
/* end stolen code */

async function example() {
  const inStream = fs.createReadStream(process.argv[2])
  const reader = await CarBlockIterator.fromIterable(inStream)

  for await (const { cid, bytes } of reader) {

    const decodedCbor = CBOR.decode(bytes)
    if (decodedCbor.$type) {
      console.log('item with cid: ', cid, 'and content: ', decodedCbor)
    }
  }
}

example().catch((err) => {
  console.error(err)
  process.exit(1)
})
