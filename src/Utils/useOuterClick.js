import { useEffect } from 'react';

export function useOuterClick(ref, active = true, callback) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target) && active) {
				callback();
			}
		}
		if (active) document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, active, callback]);
}
