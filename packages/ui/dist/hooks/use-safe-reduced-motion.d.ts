/**
 * Motion's `useReducedMotion` resolves to `null` during SSR, so branching on it
 * makes the first client render diverge from the server HTML. Reading it
 * through an external store keeps hydration in sync.
 */
export declare function useSafeReducedMotion(): boolean;
//# sourceMappingURL=use-safe-reduced-motion.d.ts.map