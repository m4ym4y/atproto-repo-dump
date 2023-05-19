# ATproto REPO dump

to run:

```sh
npm install
node index.js my_repo.car
```

dumps repos in the form:

```json
item with cid:  CID(bafyreicldzhg5stbonbknexwmh3dtmfon3nqoyspcpyqowbefd63l7b3by) and content:  {
  '$type': 'app.bsky.graph.block',
  subject: 'did:plc:2rhgf24qcpdxuscon3gwp6it',
  createdAt: '2023-05-05T06:31:30.019Z'
}
item with cid:  CID(bafyreih4sgcpex3e7r7hlhabe6bcemrvwbi35xcjlyzbogonacidx42szm) and content:  {
  text: 'skamteboard',
  '$type': 'app.bsky.feed.post',
  reply: {
    root: {
      cid: 'bafyreige7tkrq2oibd6xzgmtlaw7nbjgu64fudqvnojq7y5spqphta3fby',
      uri: 'at://did:plc:lxvbuhjbpreshfgtvfq3czsb/app.bsky.feed.post/3juxiurpvz72z'
    },
    parent: {
      cid: 'bafyreiecx4rnlsvq7krdbr5lrdffr2ctgdthlac7ouzu3l26u5okbbb7jm',
      uri: 'at://did:plc:a5pv7mjztapcfnoq2f6bkrs2/app.bsky.feed.post/3juxivj73dg2b'
    }
  },
  createdAt: '2023-05-05T05:40:03.878Z'
}
item with cid:  CID(bafyreid5kcxmqwjytuqv2spn6zk3g7ofuset4zlox3rsfoa4nxg72zd3qi) and content:  {
  '$type': 'app.bsky.graph.follow',
  subject: 'did:plc:pzifgf4c3yfxsmjc5md4m2ik',
  createdAt: '2023-05-05T05:28:51.885Z'
}
item with cid:  CID(bafyreiaa7ryh2u4gec5q6faabn6gix4v4woolnlssrktoo7nb6hifbhupe) and content:  {
  '$type': 'app.bsky.feed.like',
  subject: {
    cid: 'bafyreif7jzmtncqaeonzvu2hxck3nmdvi4hgniz6rboqw62ofbviywljlu',
    uri: 'at://did:plc:a5pv7mjztapcfnoq2f6bkrs2/app.bsky.feed.post/3juxluq4b3u2j'
  },
  createdAt: '2023-05-05T06:34:50.698Z'
}
item with cid:  CID(bafyreial7y2veu3dlzmr7jhksfkx3wo6udieegmzbdcl7corvjyh3zizjm) and content:  {
  '$type': 'app.bsky.graph.block',
  subject: 'did:plc:cm4bwax4evxmkiuwxvvkvlmx',
  createdAt: '2023-05-05T06:31:50.022Z'
}
item with cid:  CID(bafyreihiebzokfpwqqdaw4zdu3hn7uysivzrhg5ocmhdhyp6lefofdiz7a) and content:  {
  '$type': 'app.bsky.feed.like',
  subject: {
    cid: 'bafyreifgsbfdtebwnzw362jl4s6qm76txyp3geojb2flfl336ygzesns5a',
    uri: 'at://did:plc:5rw2on4i56btlcajojaxwcat/app.bsky.feed.post/3juxjm66gth2c'
  },
  createdAt: '2023-05-05T05:52:26.224Z'
}
```

this filters out repo entries that don't have a '$type' field because tbh I
don't know what those do yet. please use only for good.
