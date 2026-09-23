import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useArgs } from "storybook/preview-api";
import { CountryCodeSelect, Label } from "../src";

const meta = {
  title: "Forms/CountryCodeSelect",
  component: CountryCodeSelect,
  args: {
    value: "+1",
    iso2: "US",
    size: "md",
    locale: "en",
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    value: { control: "text" },
    iso2: { control: "text" },
    size: { control: "select", options: ["md", "sm"] },
    locale: { control: "select", options: ["en", "es"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof CountryCodeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function CountryStory(args) {
    const [, setArgs] = useArgs();
    return (
      <div className="max-w-xs space-y-2">
        <Label>Country code</Label>
        <CountryCodeSelect
          {...args}
          onChange={(nextDial, nextIso) => {
            args.onChange?.(nextDial, nextIso);
            setArgs({ value: nextDial, iso2: nextIso });
          }}
        />
        <p className="text-xs text-muted">
          Selected: {args.iso2} {args.value}
        </p>
      </div>
    );
  },
};

export const SpanishLocale: Story = {
  args: {
    value: "+506",
    iso2: "CR",
    locale: "es",
    labels: {
      title: "Código de país",
      search: "Buscar país…",
      empty: "Sin resultados",
    },
  },
  render: Default.render,
};
