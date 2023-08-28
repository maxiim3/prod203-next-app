"use client"

import BurgerButton from "@/components/molecule/BurgerButton"
import MenuPortal from "@/components/organism/MenuPortal"
import {useMobileNavigation} from "@/components/organism/MobileNavigationProvider"
import React from "react"
import {createPortal} from "react-dom"

export default function DropDownMenu() {
	const {modalIsOpen} = useMobileNavigation()

	return (
		<div className="flex items-center md:hidden">
			{/*Burger Button Trigger*/}
			<BurgerButton />
			{modalIsOpen && createPortal(<MenuPortal />, document.body!)}
		</div>
	)
}
