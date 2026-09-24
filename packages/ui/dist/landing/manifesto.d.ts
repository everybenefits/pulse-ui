export type LandingManifestoProps = {
    /** Side / ghost kicker label (e.g. station name). */
    kicker: string;
    /**
     * Manifesto copy. Prefix a word with `*` to highlight it
     * (e.g. `"Build *better* benefits"`).
     */
    manifesto: string;
    /** Optional dial readout shown in the aside (defaults to `88.0`). */
    dialValue?: string;
    dialUnit?: string;
};
export declare function LandingManifesto({ kicker, manifesto, dialValue, dialUnit, }: LandingManifestoProps): import("react").JSX.Element;
//# sourceMappingURL=manifesto.d.ts.map