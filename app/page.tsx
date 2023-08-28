import {AnimatedClientBanner} from "@/components/atom/AnimatedClientBanner"
import {TitleH2} from "@/components/atom/SectionH2"
import StaticClientBanner from "@/components/atom/StaticClientBanner"
import Icons from "@/lib/Icons"
import Image from "next/image"
import React, {PropsWithChildren, Suspense} from "react"
import {twMerge} from "tailwind-merge"

export default async function Home() {
	return (
		<main className={"relative"}>
			{/* <ScrollButton /> */}
			<header>
				<LandingVideo />
				<section className="h-screen text-center text-neutral-content">
					<article
						className={"mx-auto flex h-full select-none flex-col items-center justify-center text-primary"}>
						<h1
							className={twMerge(
								`font-poppins font-bold uppercase`,
								"text-xl-fluid",
								"motion-safe:animate-[scaleAndFade_800ms_ease-out_1.11s_both]",
								"hidden"
							)}>
							Jamais 203 Productions
						</h1>
						<Image
							src={"/assets/logo/prod203-white.webp"}
							alt="Prod203"
							className={twMerge(
								"w-full max-h-[250px] object-center object-contain",
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
				{/* Section Services */}
				<SectionTemplate
					id={"services"}
					overrideTitleClass="mb-12"
					ariaLabel={"Services"}
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
				<SectionTemplate
					id="about-us"
					className="my-20"
					title="">
					<div
						className={
							"relative flex flex-col px-4 m-4 gap-4 mx-auto xs:px-8 md:grid md:grid-cols-2 md:gap-x-12 border-t border-b py-12"
						}>
						<p className={"max-w-[70ch] tracking-wide leading-relaxed font-thin text-primary"}>
							Fondée en 2021 par Jérôme Kuhn, Nathan Stornetta et Samuel Briand, Jamais 203 Productions est
							spécialisée dans la création de contenus sonores variés.
						</p>
						<p className={"max-w-[70ch] tracking-wide leading-relaxed font-thin text-primary"}>
							Nos services englobent la composition musicale, l{"'"}enregistrement, la production et le
							mixage de musique symphonique et romantique, le design sonore pour des expériences immersives,
							la réalisation de podcasts, la production de bandes sonores pour les spectacles en direct,
							ainsi que l{"'"}édition musicale et la production pour divers supports. les concerts de
							musique classique, les cérémonies, et bien plus encore.
						</p>
					</div>
				</SectionTemplate>
				{/* Section Clients / References */}
				<SectionTemplate
					title={"Références"}
					id={"clients"}
					className={"mb-40 w-screen"}
					overrideTitleClass={"mb-2"}
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

function LandingVideo() {
	return (
		<section
			id={"hero"}
			aria-label={"Video hero banner"}
			className="absolute top-0 w-screen h-screen">
			<video
				autoPlay={true}
				muted={true}
				loop={true}
				controls={false}
				className={twMerge(
					"h-[100vh] w-[100%] object-cover object-center",
					"motion-safe:animate-[scaleAndFade_50ms_ease-out_both]"
				)}>
				<source
					src="/assets/video/pexels-c-technical-7095057%20(540p).mp4"
					type="video/mp4"
				/>
				<source
					src="/assets/video/pexels-c-technical-7095057%20(720p).mp4"
					type="video/mp4"
					media="(min-width: 680px) and (max-width: 1080px)"
				/>
				<source
					src="/assets/video/pexels-c-technical-7095057%20(1080p).mp4"
					type="video/mp4"
					media="(min-width: 1080px) and (max-width: 1439px)"
				/>
				<source
					src="/assets/video/pexels-c-technical-7095057%20(2160p).mp4"
					type="video/mp4"
					media="(min-width: 1440px)"
				/>
			</video>
		</section>
	)
}

interface SectionTemplateProps extends PropsWithChildren {
	title: string
	id: string
	className?: string
	ariaLabel?: string
	overrideTitleClass?: string
}

const SectionTemplate = ({children, className, overrideTitleClass, ariaLabel, title, id}: SectionTemplateProps) => (
	<section
		aria-label={ariaLabel}
		className={twMerge(" flex min-h-[420px] w-screen snap-center items-center max-w-[980px] mx-auto")}
		id={id}>
		<main className={twMerge("min-h-xl  w-full flex-col gap-12 overflow-hidden py-8", className)}>
			<TitleH2
				className={twMerge(
					"w-content mx-auto text-center text-4xl sm:text-5xl font-semibold ",
					overrideTitleClass
				)}>
				{title}
			</TitleH2>
			{children}
		</main>
	</section>
)

// service : Musiques Originales, Production Executive, Édition, Mixage, Mastering, Mixage Immersif Atoms, Design Sonore, Gestion de Projet
const services = [
	{
		title: "Musiques Originales",
		content: "Musiques Originales",
		Icon: Icons.Piano,
	},
	{
		title: "Production Executive",
		content: "Production Executive",
		Icon: Icons.Music,
	},
	{
		title: "Édition",
		content: "Édition",
		// Icon: Icons.Cut,
		source: "/assets/services/note-white.png",
	},
	{
		title: "Mixage",
		content: "Mixage",
		Icon: Icons.Mixing,
	},
	{
		title: "Mastering",
		content: "Mastering",
		Icon: Icons.SolidDisc,
	},
	{
		title: "Dolby Atmos",
		content: "Dolby Atmos",
		Icon: Icons.Dolby,
	},
	{
		title: "Design Sonore",
		content: "Design Sonore",
		Icon: Icons.SoundWave,
	},
	{
		title: "Gestion de Projet",
		content: "Gestion de Projet",
		Icon: Icons.Calendar,
	},
	{
		title: "Concert",
		content: "Concert",
		// Icon: Icons.Music,
		source: "/assets/services/piano-white.png",
	},
	{
		title: "Enregistrement",
		content: "Enregistrement",
		// Icon: Icons.Mixing,
		source: "/assets/services/micro-white.png",
	},
]

// clients: Canal+, M6, Balenciaga, Nike, DisneyLand Paris, Citroen, Le,Puy Du Fou, 24h Le Mans, Chateau Fort Sedan, Edith Piaf Symphonique, Mon PLus Beau Noel, Studio Canal, Coca Cola Credit Agricole,
