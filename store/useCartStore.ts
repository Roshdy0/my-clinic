import { create } from "zustand";

export interface Course {
	id: string;
	title: string;
	description: string;
	price: number;
	instructor: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	rating: number;
	lessonsCount: number;
	image: string;
}

interface CartStore {
	cart: Course[];
	addToCart: (course: Course) => void;
	removeFromCart: (courseId: string) => void;
	clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
	cart: [],

	addToCart: (course) =>
		set((state) => {
			const exists = state.cart.some((item) => item.id === course.id);

			if (exists) return state;

			return { cart: [...state.cart, course] };
		}),

	removeFromCart: (courseId) =>
		set((state) => ({
			cart: state.cart.filter((item) => item.id !== courseId),
		})),

	clearCart: () => set({ cart: [] }),
}));
