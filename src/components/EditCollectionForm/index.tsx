import { useForm } from "@mantine/form";
import { updateCollectionContainerStyle, collectionInputStyle } from "./styles";
import { TextInput, Button } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";

const EditCollectionForm = ({
  onFormSubmit,
  onCancel,
  defaultValue,
}: {
  onFormSubmit: (collectionName: string) => void;
  onCancel: () => void;
  defaultValue: string | undefined;
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
      css={updateCollectionContainerStyle}
      onSubmit={form.onSubmit(handleFormSubmit)}
    >
      <TextInput
        icon={<IconBookmark size={18} />}
        placeholder="New collection"
        css={collectionInputStyle}
        {...form.getInputProps("collectionName")}
      />
      <Button color="gray" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit">Update</Button>
    </form>
  );
};

export default EditCollectionForm;
