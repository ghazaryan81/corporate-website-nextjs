import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
	Div, Footer,	Header,	Main,	Section,
	Span,	Img,	Svg,	Use,	A,	Br,	Nav,
	Ul,	Li,  
 H1, H2, H3, Article, P }                 from "@/components/electrons/";
import {Logo, SvgSprite, SvgSpriteProps } from "@/components/atoms/";
import { DocHead }                        from "./DocHead";

import { paths }   from "./const";
import { useEffect } from "react";

export const docHeadDynamic = {
 "other": {
  "title":                                                 "Project",
  "description":                                           "Project",
  "keywords":                                              "Project",
 },

	"og": {
		"og:type":                                               "website",
		"og:url":                                                "",
		"og:locale":                                             "en_EN",
		"og:title":                                              "Project",
		"og:description":                                        "Project",
		"og:image":                                              `apple-touch-icon-1024x1024.png`,
		"og:image:type":                                         "image/jpeg",
		"og:image:width":                                        "1024",
		"og:image:height":                                       "1024",
		"og:image:alt":                                          "Project",
	},

	"twitter": {
		"twitter:card":                                          "summary_large_image",
		"twitter:site":                                          "",
		"twitter:creator":                                       "",
		"twitter:title":                                         "Project",
		"twitter:description":                                   "Project",
		"twitter:image":                                         `${paths.img}/apple-touch-icon-1024x1024.png`,
	},
};

function Home({ ...props }) {
	return (
		<>
   <Head>
    <meta charSet="utf-8" />
    <title>{docHeadDynamic.other.title}</title>
    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0,shrink-to-fit=no" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <DocHead docHeadDynamic={docHeadDynamic} />
   </Head>
			<Div className="wrapper">
				<Header className="main-header">
					<Section className="top-bar">
						<Div className="container-fix">
       <Div className="top-bar__row">
        <Div className="top-bar__col top-bar__col--1">
         <Logo ImgProps={{ src: "assets/img/logo.svg", width: "210" }} linkProps={{ href: "#" }}/>
        </Div>
        <Div className="top-bar__col top-bar__col--2">

        <Div className="box box--round box--md box--flex-center box--brand-1-flat">
         <SvgSprite width="2.7rem" iconHash="icon-time" className="sprite-icon icon-width-40"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-1-flat">
         <SvgSprite width="2.6rem" iconHash="icon-email" className="sprite-icon icon-width-40"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-1-flat">
         <SvgSprite width="2.4rem" iconHash="icon-phone" className="sprite-icon icon-width-40"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-2-gradient">
         <SvgSprite width="2.55rem" iconHash="icon-delivery-brand" className="sprite-icon icon-width-40"/>
        </Div>
        
        <Div className="box box--round box--md box--flex-center box--brand-2-gradient">
         <SvgSprite width="3.05rem" iconHash="icon-coast-brand" className="sprite-icon icon-width-50"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-2-gradient">
         <SvgSprite width="2.4rem" iconHash="icon-global-brand" className="sprite-icon icon-width-40"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-2-gradient">
         <SvgSprite width="2.6rem" iconHash="icon-time" className="sprite-icon icon-width-45"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-2-gradient">
         <SvgSprite width="2.6rem" iconHash="icon-ship-brand" className="sprite-icon icon-width-40"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-2-gradient">
         <SvgSprite width="2.6rem" iconHash="icon-support-brand" className="sprite-icon icon-width-45"/>
        </Div>

        <Div className="box box--round box--md box--flex-center box--brand-2-gradient">
         <SvgSprite width="2.6rem" iconHash="icon-transport-brand" className="sprite-icon icon-width-45"/>
        </Div>

        <Div className="box box--round box--lg box--flex-center box--brand-2-gradient">
         <SvgSprite width="3.15rem" iconHash="icon-quote" className="sprite-icon icon-width-45"/>
        </Div>

        <Div className="box box--round box--sm box--flex-center box--brand-2-gradient box--brand-2-gradient-hover">
         <SvgSprite width="1.35rem" iconHash="icon-arrow-tail-prev" className="sprite-icon icon-width-35"/>
        </Div>

        <Div className="box box--round box--sm box--flex-center box--brand-2-gradient box--brand-2-gradient-hover">
         <SvgSprite width="1.35rem" iconHash="icon-arrow-tail-next" className="sprite-icon icon-width-35"/>
        </Div>

        </Div>
       </Div>

						</Div>
					</Section>
				</Header>
				<Main className="main">

    </Main>
				<Footer className="main-footer">
     <Div className="container-fix"></Div>
    </Footer>
			</Div>
		</>
	);
}

export default Home