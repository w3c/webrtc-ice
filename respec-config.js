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
  wg: "Web Real-Time Communications Working Group",
  wgURI: "https://www.w3.org/2011/04/webrtc/",
  wgPublicList: "public-webrtc",
  wgPatentURI:  "https://www.w3.org/2004/01/pp-impl/47318/status",
  issueBase: "https://github.com/w3c/webrtc-ice/issues",
  otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-webrtc/"
        },
        {
          value: "Browse open issues",
          href: "https://github.com/w3c/webrtc-ice/issues"
        },
        {
          value: "IETF ICE Working Group",
          href: "https://tools.ietf.org/wg/ice/"
        }
      ]
    }
  ],
  localBiblio: {
    "IANA-STUN-6": {
      "title": "STUN Error Codes",
      "href": "https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6",
      "publisher": "IANA"
    },
    "JSEP": {
      "title": "Javascript Session Establishment Protocol",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-jsep",
      "authors": [
        "J. Uberti",
        "C. Jennings",
        "E. Rescorla"
      ],
      "status": "10 October 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "ORTC": {
      "title": "Object RTC (ORTC) API for WebRTC",
      "href": "http://draft.ortc.org/",
      "authors": [
        "Robin Raymond",
        "Bernard Aboba",
        "Justin Uberti"
      ],
      "status": "03 October 2018(work in progress)",
      "publisher": "W3C"
    },
   "RFC6544": {
      "title": "TCP Candidates with Interactive Connectivity Establishment (ICE)",
      "href": "https://tools.ietf.org/html/rfc6544",
      "authors": [
        "J. Rosenberg",
        "A. Keranen",
        "B. B. Lowekamp",
        "A. B. Roach"
      ],
      "status": "March 2012. RFC",
      "publisher": "IETF"
    },
   "RFC7064": {
      "title": "URI Scheme for Session Traversal Utilities for NAT (STUN) Protocol",
      "href": "https://tools.ietf.org/html/rfc7064",
      "authors": [
        "S. Nandakumar",
        "G. Salgueiro",
        "P. Jones",
        "M. Petit-Huguenin"
      ],
      "status": "November 2013. RFC",
      "publisher": "IETF"
    },
    "RFC7065": {
      "title": "Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers",
      "href": "https://tools.ietf.org/html/rfc7065",
      "authors": [
        "M. Petit-Huguenin",
        "S. Nandakumar",
        "G. Salgueiro",
        "P. Jones"
      ],
      "status": "November 2013. RFC",
      "publisher": "IETF"
    },
   "RFC7635": {
      "title": "Session Traversal Utlities for NAT (STUN) Extension for Third Party Authorization",
      "href": "https://tools.ietf.org/html/rfc7635",
      "authors": [
        "T. Reddy",
        "P. Patil",
        "R. Ravindranath",
        "J. Uberti"
      ],
      "status": "August 2015. RFC",
      "publisher": "IETF"
    },
   "RFC7675": {
      "title": "Session Traversal Utilities for NAT (STUN) Usage for Consent Freshness",
      "href": "https://tools.ietf.org/html/rfc7675",
      "authors": [
        "M. Perumal",
        "D. Wing",
        "R. Ravindranath",
        "T. Reddy",
        "M. Thomson"
      ],
      "status": "October 2015. RFC",
      "publisher": "IETF"
    },
   "RFC5245bis": {
      "title": "Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal",
      "href": "https://tools.ietf.org/html/draft-ietf-ice-rfc5245bis",
      "authors": [
        "A. Keranen",
        "C. Holmberg",
        "J. Rosenberg"
      ],
      "status": "24 October 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RTCWEB-SECURITY": {
      "title": "Security Considerations for WebRTC",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-security",
      "authors": [
        "E. Rescorla"
      ],
      "status": "29 October 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "RTCWEB-SECURITY-ARCH": {
      "title": "WebRTC Security Architecture",
      "href": "https://tools.ietf.org/html/draft-ietf-rtcweb-security-arch",
      "authors": [
        "E. Rescorla"
      ],
      "status": "30 October 2017. Internet Draft (work in progress)",
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
      "status": "11 September 2017. Internet Draft (work in progress)",
      "publisher": "IETF"
    },
    "WEBRTC-QUIC": {
      "title": "QUIC API for WebRTC",
      "href": "https://w3c.github.io/webrtc-quic/",
      "authors": [
        "Peter Thatcher",
        "Bernard Aboba"
      ],
      "status": "21 December 2017 (work in progress)",
      "publisher": "W3C"
    },
    "WEBRTC-STATS": {
      "title": "Identifiers for WebRTC's Statistics API",
      "href": "https://w3c.github.io/webrtc-stats/",
      "authors": [
        "Harald Alvestrand",
        "Varun Singh"
      ],
      "status": "29 October 2017 (work in progress)",
      "publisher": "W3C"
    }
  }
}
