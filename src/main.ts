
export function add(x: number | string, y: number | string): number {
	// Ensure arguments are number
	const x_number: number = parseInt( x as any)
	const y_number: number = parseInt( y as any)
	// Compute and return result
	return x_number + y_number
}
