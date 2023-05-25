var respecConfig = {
  specStatus: "ED",
  // if there a publicly available Editor's Draft, this is the link
  edDraftURI: "https://w3c.github.io/webrtc-ice/",
  shortName: "webrtc-ice",
  editors: [
    { name: "Peter Thatcher", company: "Microsoft Corporation", w3cid: "68236" },
    { name: "Bernard Aboba", company: "Microsoft Corporation", w3cid: "65611" } 
  ],
  authors: [
  ],
  group: "webrtc",
  wgPublicList: "public-webrtc",
  github: "https://github.com/w3c/webrtc-ice",
  testSuiteURI: "https://github.com/web-platform-tests/wpt/tree/master/webrtc-ice/",
  otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-webrtc/"
        },
        {
          value: "IETF ICE Working Group",
          href: "https://datatracker.ietf.org/wg/ice/"
        }
      ]
    }
  ],
  xref: ["webrtc", "html", "webidl"],
  lint: { "no-unused-dfns": false },
  localBiblio: {
    "IANA-STUN-6": {
      "title": "STUN Error Codes",
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA"
    },
    "ORTC": {
      "title": "Object RTC (ORTC) API for WebRTC",
      "href": "http://draft.ortc.org/",
      "authors": [
        "Robin Raymond",
        "Bernard Aboba",
        "Justin Uberti"
      ],
      "status": "25 January 2021 (work in progress)",
      "publisher": "W3C"
    },
    "STUN-PARAMETERS": {
      "authors":["IETF"],
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA",
      "status": "IANA Parameter Assignment",
      "title": "STUN Error Codes",
      "date": "April 2011"
    }
  }
}
