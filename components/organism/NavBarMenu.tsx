import NavItem from "@/components/atom/NavItem"
import {NavListStack} from "@/components/layout/NavListStack"
import LanguageSelection from "@/components/molecule/LanguageSelection"
import ROUTES from "@/lib/ROUTES"
import {nanoid} from "nanoid"
import Link from "next/link"
import React from "react"

export default function NavBarMenu() {
	return (
		<>
			<nav className={"hidden items-center md:flex"}>
				<NavListStack>
					{ROUTES.map(route => (
						<NavItem key={nanoid()}>
							<Link href={route.path}>{route.name}</Link>
						</NavItem>
					))}
				</NavListStack>
			</nav>
			<LanguageSelection className={"hidden md:flex"} />
		</>
	)
}
