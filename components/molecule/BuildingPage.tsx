import Link from "next/link"
import React from "react"

export function BuildingPage({title}: {title: string}) {
   return <div className={"mx-auto flex flex-col justify-center items-center gap-8 "}>
      <h1 className={"text-center"}>{title} - En Construction...</h1>
      <span className="loading loading-infinity loading-lg"></span>
      <img
         src="https://media4.giphy.com/media/Mah9dFWo1WZX0WM62Q/giphy.gif?cid=ecf05e478agi6i7r93sg1aa8fuenbbx4ovmk2lssg0nynj39&ep=v1_gifs_search&rid=giphy.gif&ct=ghttps://media4.giphy.com/media/Mah9dFWo1WZX0WM62Q/giphy.gif?cid=ecf05e478agi6i7r93sg1aa8fuenbbx4ovmk2lssg0nynj39&ep=v1_gifs_search&rid=giphy.gif&ct=g"
         alt="Page en construction" />
      <Link className={"btn "} href={"/"}>Back Home</Link>
   </div>
}
