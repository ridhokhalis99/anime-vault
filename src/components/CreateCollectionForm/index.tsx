import { useForm } from "@mantine/form";
import { createCollectionContainerStyle, collectionInputStyle } from "./styles";
import { TextInput, Button } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";

const CreateCollectionForm = ({
  onFormSubmit,
}: {
  onFormSubmit: (collectionName: string) => void;
}) => {
  const form = useForm({
    initialValues: {
      collectionName: "",
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
      css={createCollectionContainerStyle}
      onSubmit={form.onSubmit(handleFormSubmit)}
    >
      <TextInput
        icon={<IconBookmark size={18} />}
        placeholder="New collection"
        css={collectionInputStyle}
        {...form.getInputProps("collectionName")}
      />
      <Button type="submit">Create</Button>
    </form>
  );
};

export default CreateCollectionForm;
