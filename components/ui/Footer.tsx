import {classed} from "@tw-classed/react"
import Image from "next/image"
import Link from "next/link"
import React, {PropsWithChildren} from "react"
import {twMerge} from "tailwind-merge"

export default function Footer() {
	return (
		<footer className={"bg-base-200/60"}>
			<div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
				<div className="sm:flex sm:justify-between">
					<Image
						width={260}
						height={80}
						className="object-contain object-left w-48 -translate-x-6"
						src={"/assets/logo/prod203-white.webp"}
						alt={"Prod 203"}
					/>

					<ul className="flex justify-start gap-6 mt-8 sm:mt-0 sm:justify-end">
						<li>
							<Link href={"#"}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill="currentColor"
										d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
									/>
								</svg>
							</Link>
						</li>
					</ul>
				</div>

				<div className="grid grid-cols-1 gap-8 pt-8 border-t border-primary/80 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
					<Section>
						<SectionTitle>Liens rapides</SectionTitle>
						<Item>
							<Link href={"/"}>Accueil</Link>
						</Item>
						<Item>
							<Link href={"/showcase"}>Showcase</Link>
						</Item>
						<Item>
							<Link href={"/about"} />
						</Item>
						<Item>
							<Link href={"/contact"}>Contact</Link>
						</Item>
					</Section>
					<Section>
						<SectionTitle>Légal</SectionTitle>
						<Item>Mentions Légales</Item>
						<Item>Données Personnelles</Item>
					</Section>
				</div>

				<p className="text-xs text-primary/70">&copy; 2023. Jamais 203 Productions. All rights reserved.</p>
			</div>
		</footer>
	)
}
const Section = (props: PropsWithChildren<{className?: string}>) => (
	<section className={twMerge("w-41 text-left items-start  flex flex-col", props.className)}>{props.children}</section>
)

const SectionTitle = (props: PropsWithChildren<{className?: string}>) => {
	return (
		<h3
			className={twMerge(
				"font-regular w-full font-semibold text-base text-primary uppercase tracking-widest",
				props.className
			)}>
			{props.children}
		</h3>
	)
}
const Item = classed(
	"li",
	"list-none text-base text-primary text-base leading-loose tracking-wider font-regular",
	"hover:text-primary"
)
