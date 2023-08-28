import {clients} from "@/lib/mocked_data"
import {nanoid} from "nanoid"
import React from "react"
import Image from "next/image"

export default function StaticClientBanner() {
	return (
		<article className={"mx-auto hidden max-w-5xl items-center justify-center gap-x-6 gap-y-0 md:flex  md:flex-wrap"}>
			{clients.map(client => (
				<figcaption key={nanoid()}>
					<Image
						width={200}
						height={200}
						alt={client.title}
						src={client.source}
						className={"mx-2 h-32 w-48 object-contain object-center opacity-70"}
					/>
				</figcaption>
			))}
		</article>
	)
}
