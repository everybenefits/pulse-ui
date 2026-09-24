export type LandingOrbitTopic = {
    label: string;
    freq: string;
};
export type LandingTopicOrbitProps = {
    kicker: string;
    title: string;
    subtitle: string;
    coreLabel: string;
    brandShort: string;
    /** Up to 8 topics; extras are ignored. */
    topics: LandingOrbitTopic[];
};
export declare function LandingTopicOrbit({ kicker, title, subtitle, coreLabel, brandShort, topics, }: LandingTopicOrbitProps): import("react").JSX.Element;
//# sourceMappingURL=topic-orbit.d.ts.map