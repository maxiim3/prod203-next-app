import {AnimatedClientBanner} from "@/components/atom/AnimatedClientBanner"
import {TitleH2} from "@/components/atom/SectionH2"
import StaticClientBanner from "@/components/atom/StaticClientBanner"
import Icons from "@/lib/Icons"
import Image from "next/image"
import React, {PropsWithChildren, Suspense} from "react"
import {twMerge} from "tailwind-merge"
import {Video} from "./Video"
import {classed} from "@tw-classed/react"

// ? FEATURE Add a scroll parallax effect to the hero section

export default async function Home() {
	return (
		<main className={"relative"}>
			<header>
				{/**
				 * ==========================
				 * 		HERO SECTION
				 * 	    VIDEO BANNER
				 * ==========================
				 * **/}
				<section
					id={"hero"}
					aria-label={"Video hero banner"}
					className="absolute top-0 w-screen h-screen">
					<Video />
				</section>
				{/**
				 * ==========================
				 * 		HERO SECTION
				 * 	   CONTENT BANNER
				 * ==========================
				 * **/}
				<section className="h-screen text-center text-neutral-content">
					<article
						className={
							"mx-auto flex h-full select-none flex-col relative items-center justify-center text-primary"
						}>
						<h1
							className={twMerge(
								`font-poppins font-bold uppercase`,
								"text-xl-fluid",
								"motion-safe:animate-[scaleAndFade_800ms_ease-out_1.11s_both]",
								"invisible absolute -top-full -left-full"
							)}>
							Jamais 203 Productions
						</h1>
						{/**
						 * ==========================
						 * 		HERO SECTION
						 * 	     LOGO IMAGE
						 * ==========================
						 * **/}
						<Image
							src={"/assets/logo/prod203-white.webp"}
							alt="Prod203"
							className={twMerge(
								"max-h-32 w-full object-center object-contain",
								"motion-safe:animate-[scaleAndFade_800ms_ease-out_1.11s_both]"
							)}
							width={1500}
							height={337}
						/>
						<p
							className={
								"text-lg-fluid motion-safe:animate-[scaleAndFade_800ms_ease-out_1.22s_both] hidden"
							}>
							Façonnons l’Art du son
						</p>
					</article>
				</section>
			</header>

			<div className="relative snap-y snap-mandatory">
				{/**
				 * ==========================
				 * 		TOP SECTION 1/3
				 *       SERVICES
				 * ==========================
				 **/}
				<SectionTemplate
					id={"services"}
					ariaLabel={"Services"}
					outterContainerStyles="mt-20"
					title={"Services"}>
					<article className="grid grid-cols-2 mx-auto w-fit gap-x-3 gap-y-5 place-content-center place-items-center xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xs:gap-y-6 sm:gap-x-8 sm:gap-y-8 ">
						{services.map((service, index) => (
							<span
								key={service.title}
								className={twMerge(
									"flex flex-col items-center justify-center place-self-center gap-2",
									"h-fit px-0.5 sm:p-1 w-fit md:px-2"
								)}>
								{service.Icon ? (
									<service.Icon className="text-2xl text-primary" />
								) : (
									<Image
										width={64}
										height={64}
										src={service.source!}
										className={"h-8 w-8 object-contain object-center"}
										alt="error loading"
									/>
								)}
								<h3 className="w-32 text-sm font-light tracking-[1.4px] text-center text-primary text-balance">
									{service.title}
								</h3>
								{/*<p className="text-base text-center">{service.content}</p>*/}
							</span>
						))}
					</article>
				</SectionTemplate>

				{/**
				 * ==========================
				 * 		MIDDLE SECTION 2/3
				 * 	 	  ABOUT US
				 * ==========================
				 * **/}
				<SectionTemplate
					id="about-us"
					sectionTitleStyles="hidden"
					outterContainerStyles="my-24"
					title="">
					<div
						className={
							"relative flex flex-col px-4 m-4 gap-4 mx-auto xs:px-8 md:grid md:grid-cols-2 md:gap-x-12 border-t border-b py-12"
						}>
						<Text>
							Fondée en 2021 par Jérôme Kuhn, Nathan Stornetta et Samuel Briand,{" "}
							<Accent className="uppercase">Jamais 203 Productions</Accent> est spécialisée dans la création
							de contenus sonores exigeants.
						</Text>
						<Text>
							Nos savoir-faire englobent la <Accent>composition musicale</Accent>, l{"'"}
							<Accent>enregistrement</Accent>, la <Accent>production</Accent> et le mixage de musiques
							symphoniques et romantiques; Le <Accent>design sonore</Accent> pour des expériences
							immersives, la réalisation de <Accent>podcasts</Accent>, la production de{" "}
							<Accent>bandes sonores pour les spectacles</Accent> en direct, ainsi que l{"'"}
							<Accent>édition musicale</Accent> et la production pour divers supports tels que les{" "}
							<Accent>concerts</Accent>
							de <Accent>musique classique</Accent>, les <Accent>cérémonies</Accent>, et bien plus encore.
						</Text>
					</div>
				</SectionTemplate>
				{/**
				 * ==========================
				 * 		BOTTOM SECTION 3/3
				 * 		  CLIENTS
				 * ==========================
				 * **/}
				<SectionTemplate
					title={"Références"}
					id={"clients"}
					outterContainerStyles={"mb-20"}
					innerContainerStyles={"w-screen"}
					ariaLabel={"Nos Clients"}>
					<Suspense fallback={<p>Loading...</p>}>
						<AnimatedClientBanner />
						<StaticClientBanner />
					</Suspense>
				</SectionTemplate>
			</div>
		</main>
	)
}

function ScrollButton() {
	return (
		<a
			href={"/#services"}
			className={twMerge(
				" fixed bottom-4 left-1/2 rounded-xl p-3",
				"border-none bg-base-100/20 backdrop-blur-sm",
				"motion-safe:animate-revealFromBottom",
				"hover:bg-base-100",
				"group z-50"
			)}>
			<Icons.Arrow
				className={"animate-bounce text-4xl text-primary/75 group-hover:scale-105 group-hover:animate-none"}
			/>
		</a>
	)
}

const SectionTemplate = ({
	children,
	outterContainerStyles,
	innerContainerStyles,
	sectionTitleStyles,
	ariaLabel,
	title,
	id,
}: PropsWithChildren<{
	title: string
	id: string
	outterContainerStyles?: string
	innerContainerStyles?: string
	sectionTitleStyles?: string
	ariaLabel?: string
}>) => (
	<section
		aria-label={ariaLabel}
		className={twMerge(" flex w-screen snap-center items-center max-w-[980px] mx-auto", outterContainerStyles)}
		id={id}>
		<main className={twMerge("min-h-xl flex w-full flex-col gap-12 overflow-hidden", innerContainerStyles)}>
			<TitleH2
				className={twMerge(
					"w-content mx-auto text-center text-4xl sm:text-5xl font-thin uppercase ",
					sectionTitleStyles
				)}>
				{title}
			</TitleH2>
			{children}
		</main>
	</section>
)

// service : Musiques Originales, Production Executive, Édition, Mixage, Mastering, Mixage Immersif Atoms, Design Sonore, Gestion de Projet
const services = [
	{title: "Musiques Originales", content: "Musiques Originales", Icon: Icons.Piano},
	{title: "Production Executive", content: "Production Executive", Icon: Icons.Music},
	{title: "Édition", content: "Édition", source: "/assets/services/note-white.png"},
	{title: "Enregistrement", content: "Enregistrement", source: "/assets/services/micro-white.png"},
	{title: "Mixage", content: "Mixage", Icon: Icons.Mixing},
	{title: "Mastering", content: "Mastering", Icon: Icons.SolidDisc},
	{title: "Dolby Atmos", content: "Dolby Atmos", Icon: Icons.Dolby},
	{title: "Design Sonore", content: "Design Sonore", Icon: Icons.SoundWave},
	{title: "Concert", content: "Concert", source: "/assets/services/piano-white.png"},
	{title: "Gestion de Projet", content: "Gestion de Projet", Icon: Icons.Calendar},
]

// clients: Canal+, M6, Balenciaga, Nike, DisneyLand Paris, Citroen, Le,Puy Du Fou, 24h Le Mans, Chateau Fort Sedan, Edith Piaf Symphonique, Mon PLus Beau Noel, Studio Canal, Coca Cola Credit Agricole,

const Text = ({children, className}: PropsWithChildren<{className?: string}>) => (
	<p className={twMerge("max-w-[70ch] tracking-wider leading-relaxed font-extralight text-primary", className)}>
		{children}
	</p>
)
const Accent = ({children, className}: PropsWithChildren<{className?: string}>) => (
	<strong className={twMerge("font-semibold", className)}>{children}</strong>
)
