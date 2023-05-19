import fs from 'fs'
import { CarBlockIterator } from '@ipld/car/iterator'
import Encodr from 'encodr'

const CBOR = new Encodr('cbor')

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
