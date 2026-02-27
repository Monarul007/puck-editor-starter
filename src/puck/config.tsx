import type { Config } from "@measured/puck";
import { Section } from "./components/Section";
import type { SectionProps } from "./components/Section";
import { Container } from "./components/Container";
import type { ContainerProps } from "./components/Container";
import { Column } from "./components/Column";
import type { ColumnProps } from "./components/Column";
import { Heading } from "./components/Heading";
import type { HeadingProps } from "./components/Heading";
import { Text } from "./components/Text";
import type { TextProps } from "./components/Text";
import { Image } from "./components/Image";
import type { ImageProps } from "./components/Image";
import { Video } from "./components/Video";
import type { VideoProps } from "./components/Video";
import { Button } from "./components/Button";
import type { ButtonProps } from "./components/Button";
import { Divider } from "./components/Divider";
import type { DividerProps } from "./components/Divider";
import { Spacer } from "./components/Spacer";
import type { SpacerProps } from "./components/Spacer";
import { Icon } from "./components/Icon";
import type { IconProps } from "./components/Icon";
import { RichText } from "./components/RichText";
import type { RichTextProps } from "./components/RichText";
import { Slider } from "./components/Slider";
import type { SliderProps } from "./components/Slider";
import { DynamicSection } from "./components/DynamicSection";
import type { DynamicSectionProps } from "./components/DynamicSection";
import { Tabs } from "./components/Tabs";
import type { TabsProps } from "./components/Tabs";
import { Accordion } from "./components/Accordion";
import type { AccordionProps } from "./components/Accordion";
import { SpacingField } from "./fields/SpacingField";
import { ColorField } from "./fields/ColorField";
import { TypographyField } from "./fields/TypographyField";
import { ImageField } from "./fields/ImageField";
import { IconPickerField } from "./fields/IconPickerField";
import { ApiBindingField } from "./fields/ApiBindingField";
import { ResponsiveField } from "./fields/ResponsiveField";

export type Props = {
  Section: SectionProps;
  Container: ContainerProps;
  Column: ColumnProps;
  Heading: HeadingProps;
  Text: TextProps;
  Image: ImageProps;
  Video: VideoProps;
  Button: ButtonProps;
  Divider: DividerProps;
  Spacer: SpacerProps;
  Icon: IconProps;
  RichText: RichTextProps;
  Slider: SliderProps;
  DynamicSection: DynamicSectionProps;
  Tabs: TabsProps;
  Accordion: AccordionProps;
};

export const config: Config<Props> = {
  components: {
    Section: {
      fields: {
        columns: { type: "number", min: 1, max: 12 },
        gap: { type: "number" },
        minHeight: { type: "text" },
        padding: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ResponsiveField value={value as any} onChange={onChange} label="Padding">
              {({ value: responsiveValue, onChange: responsiveOnChange }) => (
                <SpacingField value={responsiveValue} onChange={responsiveOnChange} />
              )}
            </ResponsiveField>
          ),
        },
        background: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ColorField value={value as any} onChange={onChange} label="Background" />
          ),
        },
      },
      defaultProps: {
        columns: 1,
        gap: 20,
      },
      render: (props) => <Section {...props} />,
    },
    Container: {
      fields: {
        display: {
          type: "select",
          options: [
            { label: "Block", value: "block" },
            { label: "Flex", value: "flex" },
            { label: "Grid", value: "grid" },
          ],
        },
        width: { type: "text" },
        padding: {
          type: "custom",
          render: ({ value, onChange }) => (
            <SpacingField value={value as any} onChange={onChange} label="Padding" />
          ),
        },
        margin: {
          type: "custom",
          render: ({ value, onChange }) => (
            <SpacingField value={value as any} onChange={onChange} label="Margin" />
          ),
        },
        background: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ColorField value={value as any} onChange={onChange} label="Background" />
          ),
        },
      },
      defaultProps: {
        display: "block",
        width: "100%",
      },
      render: (props) => <Container {...props} />,
    },
    Column: {
      fields: {
        span: { type: "number", min: 1, max: 12 },
      },
      defaultProps: {
        span: 1,
      },
      render: (props) => <Column {...props} />,
    },
    Heading: {
      fields: {
        text: { type: "text" },
        level: {
          type: "select",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
            { label: "H5", value: "h5" },
            { label: "H6", value: "h6" },
          ],
        },
        typography: {
          type: "custom",
          render: ({ value, onChange }) => (
            <TypographyField value={value as any} onChange={onChange} label="Typography" />
          ),
        },
      },
      defaultProps: {
        text: "Heading",
        level: "h2",
      },
      render: (props) => <Heading {...props} />,
    },
    Text: {
      fields: {
        text: { type: "textarea" },
        typography: {
          type: "custom",
          render: ({ value, onChange }) => (
            <TypographyField value={value as any} onChange={onChange} label="Typography" />
          ),
        },
      },
      defaultProps: {
        text: "Enter text here...",
      },
      render: (props) => <Text {...props} />,
    },
    Image: {
      fields: {
        src: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ImageField value={value as any} onChange={onChange} label="Image" />
          ),
        },
        alt: { type: "text" },
        objectFit: {
          type: "select",
          options: [
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "fill" },
          ],
        },
        borderRadius: { type: "text" },
      },
      defaultProps: {
        src: "https://via.placeholder.com/800x450",
        objectFit: "cover",
      },
      render: (props) => <Image {...props} />,
    },
    Video: {
      fields: {
        url: { type: "text" },
        autoplay: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
        muted: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
        loop: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
        controls: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
      },
      defaultProps: {
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        autoplay: false,
        muted: true,
        loop: false,
        controls: true,
      },
      render: (props) => <Video {...props} />,
    },
    Button: {
      fields: {
        text: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Solid", value: "solid" },
            { label: "Outline", value: "outline" },
            { label: "Ghost", value: "ghost" },
          ],
        },
        color: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ColorField value={value as any} onChange={onChange} label="Button Color" />
          ),
        },
        textColor: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ColorField value={value as any} onChange={onChange} label="Text Color" />
          ),
        },
        borderRadius: { type: "text" },
        icon: {
          type: "custom",
          render: ({ value, onChange }) => (
            <IconPickerField value={value as any} onChange={onChange} label="Icon" />
          ),
        },
        iconPosition: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        text: "Button",
        variant: "solid",
        color: "#3b82f6",
        textColor: "#ffffff",
      },
      render: (props) => <Button {...props} />,
    },
    Divider: {
      fields: {
        style: {
          type: "select",
          options: [
            { label: "Solid", value: "solid" },
            { label: "Dashed", value: "dashed" },
            { label: "Dotted", value: "dotted" },
            { label: "Double", value: "double" },
          ],
        },
        color: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ColorField value={value as any} onChange={onChange} label="Color" />
          ),
        },
        thickness: { type: "number" },
        width: { type: "text" },
      },
      defaultProps: {
        style: "solid",
        color: "#e5e7eb",
        thickness: 1,
        width: "100%",
      },
      render: (props) => <Divider {...props} />,
    },
    Spacer: {
      fields: {
        height: { type: "text" },
      },
      defaultProps: {
        height: "20px",
      },
      render: (props) => <Spacer {...props} />,
    },
    Icon: {
      fields: {
        icon: {
          type: "custom",
          render: ({ value, onChange }) => (
            <IconPickerField value={value as any} onChange={onChange} label="Icon" />
          ),
        },
        size: { type: "number" },
        color: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ColorField value={value as any} onChange={onChange} label="Color" />
          ),
        },
        href: { type: "text" },
      },
      defaultProps: {
        icon: "Activity",
        size: 24,
      },
      render: (props) => <Icon {...props} />,
    },
    RichText: {
      fields: {
        content: { type: "custom", render: () => null as any }, // Placeholder
      },
      defaultProps: {
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Hello, start typing..." }],
            },
          ],
        },
      },
      render: ({ content, onChange, editMode }) => (
        <RichText content={content} editMode={editMode} onChange={onChange} />
      ),
    },
    Slider: {
      fields: {
        slides: { type: "number", min: 1, max: 10 },
      },
      defaultProps: {
        slides: 1,
      },
      render: (props) => <Slider {...props} />,
    },
    DynamicSection: {
      fields: {
        api: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ApiBindingField value={value as any} onChange={onChange} label="API Configuration" />
          ),
        },
      },
      render: (props) => <DynamicSection {...props} />,
    },
    Tabs: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
          },
          getItemSummary: (item) => item.label || "Tab",
        },
      },
      defaultProps: {
        items: [{ label: "Tab 1" }],
      },
      render: (props) => <Tabs {...props} />,
    },
    Accordion: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
          getItemSummary: (item) => item.title || "Accordion Item",
        },
      },
      defaultProps: {
        items: [{ title: "Item 1" }],
      },
      render: (props) => <Accordion {...props} />,
    },
  },
};

export default config;
