var respecConfig = {
  specStatus: "ED",
  // if there a publicly available Editor's Draft, this is the link
  edDraftURI: "https://w3c.github.io/webrtc-ice/",
  shortName: "webrtc-ice",
  editors: [
    { name: "Peter Thatcher", company: "Google", w3cid: "68236" },
    { name: "Bernard Aboba", company: "Microsoft Corporation", w3cid: "65611" } 
  ],
  authors: [
  ],
  group: "webrtc",
  wgPublicList: "public-webrtc",
  github: "https://github.com/w3c/webrtc-ice",
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
          href: "https://tools.ietf.org/wg/ice/"
        }
      ]
    }
  ],
  xref: ["webrtc", "html", "webidl"],
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
      "status": "03 October 2018 (work in progress)",
      "publisher": "W3C"
    },
    "ICE-SDP": {
      "title": "Session Description Protocol (SDP) Offer/Answer procedures for Interactive Connectivity Establishment (ICE)",
      "href": "https://tools.ietf.org/html/draft-ietf-mmusic-ice-sip-sdp",
      "authors": [
        "M. Petit-Huguenin",
        "S. Nandakumar",
        "C. Holmberg",
        "A. Keranen",
        "R. Shpount"
      ],
      "status": "13 August 2019. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RTCWEB-SECURITY-ARCH": {
      "title": "WebRTC Security Architecture",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-security-arch",
      "authors": [
        "E. Rescorla"
      ],
      "status": "21 July 2019. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "STUN-PARAMETERS": {
      "authors":["IETF"],
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA",
      "status": "IANA Parameter Assignment",
      "title": "STUN Error Codes",
      "date": "April 2011"
    },
    "TRICKLE": {
      "title": "Trickle ICE: Incremental Provisioning of Candidates for the Interactive Connectivity Establishment (ICE) Protocol",
      "href": "https://tools.ietf.org/html/draft-ietf-ice-trickle",
      "authors": [
        "E. Ivov",
        "E. Rescorla",
        "J. Uberti",
        "P. Saint-Andre"
      ],
      "status": "15 April 2018. Internet Draft (work in progress)",
      "publisher": "IETF"
    }
  }
}
