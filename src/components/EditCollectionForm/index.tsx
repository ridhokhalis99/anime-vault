import { useForm } from "@mantine/form";
import {
  updateCollectionContainerStyle,
  collectionInputStyle,
  buttonContainerStyle,
  buttonStyle,
} from "./styles";
import { TextInput, Button } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { css } from "@emotion/react";

const EditCollectionForm = ({
  onFormSubmit,
  onCancel,
  defaultValue,
  containerCss,
  buttonContainerCss,
}: {
  onFormSubmit: (collectionName: string) => void;
  onCancel: () => void;
  defaultValue: string | undefined;
  containerCss?: string;
  buttonContainerCss?: string;
}) => {
  const form = useForm({
    initialValues: {
      collectionName: defaultValue || "",
    },

    validate: {
      collectionName: (value) => {
        if (!value) {
          return "Collection name is required";
        }
        if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          return "Collection name should only contain alphanumeric characters and spaces";
        }
        return null;
      },
    },
  });

  const handleFormSubmit = (values: { collectionName: string }) => {
    onFormSubmit(values.collectionName);
    form.reset();
  };

  return (
    <form
      css={css`
        ${updateCollectionContainerStyle}
        ${containerCss}
      `}
      onSubmit={form.onSubmit(handleFormSubmit)}
    >
      <TextInput
        icon={<IconBookmark size={18} />}
        placeholder="New collection"
        css={collectionInputStyle}
        {...form.getInputProps("collectionName")}
      />
      <div
        css={css`
          ${buttonContainerStyle}
          ${buttonContainerCss}
        `}
      >
        <Button color="gray" onClick={onCancel} css={buttonStyle}>
          Cancel
        </Button>
        <Button type="submit" css={buttonStyle}>
          Update
        </Button>
      </div>
    </form>
  );
};

export default EditCollectionForm;
