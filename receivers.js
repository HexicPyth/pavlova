// Receiver configuration for pavlova dispatcher
// Copyright 2016-2021 Pierre Ynard
// Licensed under GPLv3+

var receivers = {
	// Each supported area is defined by a short code that will be
	// matched against the URL (e.g. "#r/4625" will be dispatched
	// to a receiver in area "r" on 4625 kHz); and by a list of
	// receiver URLs, sorted by preference with the best one at the
	// top (which should be based on location, antenna, reception
	// quality...).
	area: {
		// All listed here are KiwiSDR instances
		a: [ // Asia, transmitted from Far East
			'http://szsdr.ddns.net:8073/', // Chin
			'http://hbsdr.proxy.kiwisdr.com:8073/', // China
			'http://hl3amo.ddns.net:8074/', // South Korea
			'http://hl5ntr.ddns.net:8073/', // South Korea
			'http://jp7fso.proxy.kiwisdr.com:8073/', // Fukushima, Japan
			'http://126.80.167.175:8073/', // Kobe, Japan
			'http://nsk.proxy.kiwisdr.com:8073/', // Novosibirsk, Russia
			'http://nsk2.proxy.kiwisdr.com:8073/', // Novosibirsk, Russia
			'http://khv.proxy.kiwisdr.com:8073/', // Khabarovsk, Russia
			'http://msk.swl.su:8073/', // Moscow, Russia
		],
		m: [ // Mediterranean sea / Middle East
			'http://sv1btl.no-ip.org:8073/', // Athens, Greece
			'http://sdr.telcosol.gr:8073/', // Western Greece
			'http://kiwisdr.erba.localhost.it:8073/', // Italy
			'http://sdr-bayern.spdns.de:8073/', // Upper Bavarian Forest, Germany
			'http://fsdr.duckdns.org/', // Hungary

		],
		n: [ // North America, transmitted from Cuba
			'http://lounix.net:8073/', // Kansas
			'http://ka7u.no-ip.org:8073/', // Idaho
			'http://76.127.43.125:8073/', // Las Cruces, New Mexico
			'http://ranch-pt.no-ip.org:8073/', // Texas
			'http://ka7u.no-ip.org:8074/', // Idaho
			'http://71.200.243.35:8073/', // Southwest Florida
			'http://km4rt.ddns.net:8073/', // Tipton County, Tennessee
			'http://raleigh.twrmon.net:8073/', // North Raleigh, North Carolina
		],
		p: [ // Pacific
			'http://jp7fso.proxy.kiwisdr.com:8073/', // Fukushima, Japan
			'http://126.80.167.175:8073/', // Kobe, Japan
			'http://202.127.177.27:8073/', // Kanuma, Japan
			'http://hl3amo.ddns.net:8074/', // South Korea
			'http://69.27.184.58:8073/', // Half Moon Bay, CA
			'http://kiwisdr.robinett.us:8073/', // Hawaii
			'http://wa6our.ddns.net:8073/', // Seattle, WA
			'http://kiwisdr.ece.uvic.ca:8073/', // Victoria, BC
			'http://119.224.45.205:8073/', // New Zealand
			'http://rjdevlin47.sytes.net:8073/', // Hawaii
		],
		r: [ // Russia
			'http://nsk.proxy.kiwisdr.com:8073/', // Novosibirsk, Russia
			'http://nsk2.proxy.kiwisdr.com:8073/', // Novosibirsk, Russia
			'http://khv.proxy.kiwisdr.com:8073/', // Khabarovsk, Russia
			'http://msk.swl.su:8073/', // Moscow, Russia
		]

	},
	timeout: 5000, // Timeout when probing receivers, in milliseconds
};