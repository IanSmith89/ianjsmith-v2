import { TweenLite, TweenMax } from 'gsap';

// This function is called when the animation is complete.
// Calling callbacks at the end of animations is pretty normal.
// This fancy clearProps jazz is simply wiping off any remnant CSS.
const handleComplete = target =>
	TweenLite.set(target, {
		clearProps: 'position, width, transform'
	});

const getTargetWidth = node => {
	// Cancel existing animations
	TweenMax.killTweensOf(node);

	const { parentNode } = node;
	return (
		parentNode.clientWidth -
		parseFloat(getComputedStyle(parentNode).paddingLeft) * 2
	);
};

/**
 * Notice how the node comes in as a parameter. This is incredibly
 * important to understand because it means the only thing
 * this function needs to operate is a node. You could call this
 * function literally any time you have a node to give it.
 * What is a node? It is a DOM element.
 * ex: ref={(node) => {
 *        this.node = node
 *        handleAnimation(node)
 *     }}
 * The key takeaway from this comment block is that GSAP
 * doesn't care when or where you call it. It only cares about
 * which DOM elements are animating and their before and after
 * CSS properties.
 */
export const fadeInUp = node => {
	if (!node) return;

	const width = getTargetWidth(node);

	// Set element position
	TweenLite.set(node, {
		autoAlpha: 0,
		ease: 'ease-out',
		position: 'fixed',
		width,
		y: 25
	});

	// Animate element
	TweenLite.to(node, 0.5, {
		autoAlpha: 1,
		delay: 0.3,
		onComplete: handleComplete,
		onCompleteParams: [node],
		y: 0
	});
};

export const fadeOutUp = node => {
	if (!node) return;

	const width = getTargetWidth(node);

	// Set element position
	TweenLite.set(node, {
		ease: 'ease-in',
		position: 'fixed',
		width,
		y: 0
	});

	// Animate element
	TweenLite.to(node, 0.3, {
		autoAlpha: 0,
		onComplete: handleComplete,
		onCompleteParams: [node],
		y: -25
		// I put this in here to force you to consider it as a hook
		// onComplete: () => console.log('Page exit complete.')
	});
};
