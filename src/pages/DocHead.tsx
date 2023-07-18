import { paths } from "./const";


export const docHeadConstant = {
	"other": {
		"viewport":                                              "width=device-width,height=device-height,initial-scale=1,maximum-scale=5,minimum-scale=1,user-scalable=yes,shrink-to-fit=no",
		"theme-color":                                           "#ffffff",
		"application-name":                                      "Project",
	},

	"apple-mobile-web-app": {
		"apple-mobile-web-app-capable":                          "yes",
		"apple-mobile-web-app-status-bar-style":                 "black-translucent",
		"apple-mobile-web-app-title":                            "Project",
	},

	"msapplication": {
		"msapplication-tooltip":                                 "Project",
		"msapplication-starturl":                                "/",
		"msapplication-TileColor":                               "#ffffff",
		"msapplication-TileImage":                               `${paths.fav}/ms-icon-310x310.png`,
		"msapplication-square70x70logo":                         `${paths.fav}/mstile-70x70.png`,
		"msapplication-square150x150logo":                       `${paths.fav}/mstile-150x150.png`,
		"msapplication-wide310x150logo":                         `${paths.fav}/msapplicationWide310x150logo.png`,
		"msapplication-square310x310logo":                       `${paths.fav}/ms-icon-310x310.png`,
		"msapplication-config":                                  `browserconfig.xml`,
	},

	"format": {
		"format-detection-1":                                     "address=no",
		"format-detection-2":                                     "email=no",
		"format-detection-3":                                     "telephone=no",
		"format-detection-4":                                     "date=no",
	},

	"apple-touch-icon-precomposed": [
		{ "href": `${paths.fav}/apple-touch-icon.png`,           "sizes": "" },
		{ "href": `${paths.fav}/apple-touch-icon-40x40.png`,     "sizes": "40x40" },
		{ "href": `${paths.fav}/apple-touch-icon-57x57.png`,     "sizes": "57x57" },
		{ "href": `${paths.fav}/apple-touch-icon-58x58.png`,     "sizes": "58x58" },
		{ "href": `${paths.fav}/apple-touch-icon-60x60.png`,     "sizes": "60x60" },
		{ "href": `${paths.fav}/apple-touch-icon-72x72.png`,     "sizes": "72x72" },
		{ "href": `${paths.fav}/apple-touch-icon-76x76.png`,     "sizes": "76x76" },
		{ "href": `${paths.fav}/apple-touch-icon-80x80.png`,     "sizes": "80x80" },
		{ "href": `${paths.fav}/apple-touch-icon-87x87.png`,     "sizes": "87x87" },
		{ "href": `${paths.fav}/apple-touch-icon-114x114.png`,   "sizes": "114x114" },
		{ "href": `${paths.fav}/apple-touch-icon-120x120.png`,   "sizes": "120x120" },
		{ "href": `${paths.fav}/apple-touch-icon-144x144.png`,   "sizes": "144x144" },
		{ "href": `${paths.fav}/apple-touch-icon-152x152.png`,   "sizes": "152x152" },
		{ "href": `${paths.fav}/apple-touch-icon-167x167.png`,   "sizes": "167x167" },
		{ "href": `${paths.fav}/apple-touch-icon-180x180.png`,   "sizes": "180x180" },
		{ "href": `${paths.fav}/apple-touch-icon-1024x1024.png`, "sizes": "1024x1024" },
	],

	"apple-touch-icon": [
		{ "href": `${paths.fav}/apple-icon.png`,                 "sizes": "" },
		{ "href": `${paths.fav}/apple-touch-icon-40x40.png`,     "sizes": "40x40" },
		{ "href": `${paths.fav}/apple-touch-icon-57x57.png`,     "sizes": "57x57" },
		{ "href": `${paths.fav}/apple-touch-icon-58x58.png`,     "sizes": "58x58" },
		{ "href": `${paths.fav}/apple-touch-icon-60x60.png`,     "sizes": "60x60" },
		{ "href": `${paths.fav}/apple-touch-icon-72x72.png`,     "sizes": "72x72" },
		{ "href": `${paths.fav}/apple-touch-icon-76x76.png`,     "sizes": "76x76" },
		{ "href": `${paths.fav}/apple-touch-icon-80x80.png`,     "sizes": "80x80" },
		{ "href": `${paths.fav}/apple-touch-icon-87x87.png`,     "sizes": "87x87" },
		{ "href": `${paths.fav}/apple-touch-icon-114x114.png`,   "sizes": "114x114" },
		{ "href": `${paths.fav}/apple-icon-120x120.png`,         "sizes": "120x120" },
		{ "href": `${paths.fav}/apple-touch-icon-114x114.png`,   "sizes": "144x144" },
		{ "href": `${paths.fav}/apple-touch-icon-152x152.png`,   "sizes": "152x152" },
		{ "href": `${paths.fav}/apple-touch-icon-167x167.png`,   "sizes": "167x167" },
		{ "href": `${paths.fav}/apple-touch-icon-180x180.png`,   "sizes": "180x180" },
		{ "href": `${paths.fav}/apple-touch-icon-1024x1024.png`, "sizes": "1024x1024" },
	],

	"icon": [
		{ "href": `${paths.fav}/favicon-without-bg.png`,         "sizes": "" },
		{ "href": `${paths.fav}/favicon-16x16.png`,              "sizes": "16x16" },
		{ "href": `${paths.fav}/favicon-32x32.png`,              "sizes": "32x32" },
		{ "href": `${paths.fav}/favicon-96x96.png`,              "sizes": "96x96" },
		{ "href": `${paths.fav}/favicon-128x128.png`,            "sizes": "128x128" },
		{ "href": `${paths.fav}/favicon-192x192.png`,            "sizes": "192x192" },
		{ "href": `${paths.fav}/favicon-194x194.png`,            "sizes": "194x194" },
		{ "href": `${paths.fav}/favicon-196x196.png`,            "sizes": "196x196" },
		{ "href": `${paths.fav}/favicon-with-bg.svg`,            "type":  "image/svg+xml" },
	],

	"manifest": {
		"href":                                                  "manifest.json",
		"crossOrigin":                                           "use-credentials",
	},
 
	"alternate": {
		"href":                                                  `${paths.fav}/favicon.ico`,
	},

	"mask-icon": {
		"href":                                                  `${paths.fav}/favicon-without-bg.svg`,
		"color":                                                 "#ffffff",
	},
};

export function DocHead({docHeadDynamic}) {
	return (
		<>
   <meta name="keywords"                                    content={docHeadDynamic.other["keywords"]} />
   <meta name="description"                                 content={docHeadDynamic.other["description"]} />
   <meta name="theme-color"                                 content={docHeadConstant.other["theme-color"]} />
   <meta name="application-name"                            content={docHeadConstant.other["application-name"]} />
   {
    Object.entries(docHeadDynamic["og"]).map(
     (item, index)=> (<meta property={item[0]} content={item[1].toString()} key={index} />))
   }
   {
    Object.entries(docHeadDynamic["twitter"]).map(
     (item, index)=> (<meta name={item[0]} content={item[1].toString()} key={index} />))
   }
   {
    Object.entries(docHeadConstant["apple-mobile-web-app"]).map(
     (item, index)=> (<meta name={item[0]} content={item[1].toString()} key={index} />))
   }
   {
    Object.entries(docHeadConstant["msapplication"]).map(
     (item, index)=> (<meta name={item[0]} content={item[1].toString()} key={index} />))
   }
   {
    Object.entries(docHeadConstant["format"]).map(
     (item, index)=> (<meta name="format-detection" content={item[1].toString()} key={index} />))
   }
   {
    docHeadConstant["apple-touch-icon-precomposed"].map(// @ts-ignore
     (item, index)=> (<meta rel="apple-touch-icon-precomposed" href={item.href} sizes={item.sizes} key={index} />))
   }
   {
    docHeadConstant["apple-touch-icon"].map(// @ts-ignore
     (item, index)=> (<meta rel="apple-touch-icon" href={item.href} sizes={item.sizes} key={index} />))
   }
   {
    docHeadConstant["icon"].map(// @ts-ignore
     (item, index)=> (<meta rel="icon" href={item.href} sizes={item.sizes} key={index} />))
   }
   <link href={docHeadConstant["alternate"].href} rel="alternate icon" />
   <link href={docHeadConstant["mask-icon"].href} rel="mask-icon" color={docHeadConstant["mask-icon"].color} />
   <link href="manifest.json" crossOrigin="use-credentials" rel="manifest"/>
		</>
	);
}
