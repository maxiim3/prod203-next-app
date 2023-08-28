import {useEffect, useState} from "react"

export default function useAnimateMenu() {
	const [iconType, setIconType] = useState<"cross" | "burger">("burger")

	const [modalIsVisible, setModalVisibility] = useState<Boolean>(false)

	// const [modalScope, animateModal] = useAnimate()
	// console.log(modalScope.current)

	useEffect(() => {
		if (iconType === "burger" && modalIsVisible) {
			// animateModal(modalScope.current, {translateY: '-100%'})
			setTimeout(() => setModalVisibility(false), 600)
		} else if (iconType === "cross") {
			setModalVisibility(true)
		} else {
			setModalVisibility(false)
		}
	}, [iconType])

	// const DURATION = useRef(0.125)
	// const DELAY = useRef(0.25)
	// const templateAnimationProps = {
	//    type: 'spring',
	//    stiffness: 260,
	//    damping: 20,
	// }
	return {
		iconType,
		setIconType,
		modalIsVisible,
		// modalScope,
		// DURATION,
		// DELAY,
		// templateAnimationProps,
	}
}
