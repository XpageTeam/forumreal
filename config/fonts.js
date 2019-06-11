module.exports = {
	formats: 'local woff',
	display: "swap",
	custom: {
		"GothamPro": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/GothamPro-Light.woff",
						}
					},
					400: {
						url: {
							woff: "../fonts/GothamPro-Reg.woff",
						}
					},
					500: {
						url: {
							woff: "../fonts/GothamPro-Medium.woff",
						}
					},
					700: {
						url: {
							woff: "../fonts/GothamPro-Bold.woff",
						}
					}
				}
			}
		}
	}
}